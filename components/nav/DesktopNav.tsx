import { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { signInWithPopup, signOut, getAuth } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar } from 'notistack'

import { googleProvider } from '@/lib/db/config'
import { setUser, removeUser } from '@/lib/redux/slices/user'
import { setLoading } from '@/lib/redux/slices/app'
import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'
import bannerUtils from '@/utils/banners'
import { StyledDesktopNav, StyledDesktopNavItems } from './StyledNav'
import { BaseNavItems, AuthNavItems } from './NavItems'
import Logo from './Logo'
const { statuses, messages } = bannerUtils

const DesktopNav = () => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.user)

    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const activePage = useMemo(
        () => router.pathname.split('/')[1],
        [router.pathname]
    )

    const onHomeClick = () => (showMenu ? setShowMenu(false) : null)

    const onNavItemClick = (path: string) => {
        setShowMenu(!showMenu)
        router.push(path)
    }

    const toggleDrawer =
        (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')
            ) {
                return
            }
            setShowMenu(open)
        }

    const onLogIn = async () => {
        try {
            dispatch(setLoading(true))
            const { user: gUser } = await signInWithPopup(auth, googleProvider)
            const { authorized, user } = await getValidatedUser(gUser.email)
            if (authorized) {
                await getAllCmsData(dispatch)
                dispatch(setUser(user))
                enqueueSnackbar('Logged in successfully', {
                    variant: statuses.SUCCESS
                })
                dispatch(setLoading(false))
            } else {
                onLogOut()
            }
        } catch (error) {
            enqueueSnackbar(messages.TECHNICAL_DIFFICULTIES, {
                variant: statuses.ERROR
            })
        }
    }

    const onLogOut = async () => {
        try {
            await signOut(auth)
            dispatch(removeUser())
            enqueueSnackbar(messages.LOGGED_OUT, {
                variant: statuses.SUCCESS
            })
        } catch (error) {
            enqueueSnackbar(messages.LOG_OUT_ERROR, {
                variant: statuses.ERROR
            })
        }
    }

    return (
        <StyledDesktopNav>
            <div className="contentWrapper">
                <Logo callback={onHomeClick} />
                <StyledDesktopNavItems>
                    <BaseNavItems
                        activePage={activePage}
                        onClick={onNavItemClick}
                    />
                    <AuthNavItems
                        activePage={activePage}
                        onLogin={onLogIn}
                        onLogout={onLogOut}
                        loggedIn={!!id}
                        onDashboardClick={onNavItemClick}
                    />
                </StyledDesktopNavItems>
            </div>
        </StyledDesktopNav>
    )
}

export default DesktopNav
