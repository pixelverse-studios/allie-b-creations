import { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Drawer } from '@mui/material'
import { signInWithPopup, signOut, getAuth } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar } from 'notistack'

import { googleProvider } from '@/lib/db/config'
import { setUser, removeUser } from '@/lib/redux/slices/user'
import { setLoading } from '@/lib/redux/slices/app'
import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'

import { StyledMobileNav, StyledMobileNavItems } from './StyledNav'
import { BaseNavItems, AuthNavItems } from './NavItems'
import Logo from '@/assets/logo.svg'
import Hamburger from './Hamburger'

const MobileNav = () => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.user)

    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const activePage = useMemo(
        () => router.pathname.split('/')[1],
        [router.pathname]
    )

    const onHomeClick = () => {
        if (showMenu) setShowMenu(false)
        router.push('/')
    }
    const onNavItemClick = (path: string) => {
        setShowMenu(!showMenu)
        router.push(path)
    }
    const onBurgerClick = () => {
        setShowMenu(!showMenu)
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
                    variant: 'success'
                })
                dispatch(setLoading(false))
            } else {
                onLogOut()
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onLogOut = async () => {
        try {
            await signOut(auth)
            dispatch(removeUser())
            enqueueSnackbar('Logged out successfully', { variant: 'success' })
        } catch (error) {
            enqueueSnackbar('There was an issue logging you out', {
                variant: 'error'
            })
        }
    }

    return (
        <StyledMobileNav className={showMenu ? 'open' : ''}>
            <div className="brand" onClick={onHomeClick}>
                <img src={Logo.src} alt="Logo" />
            </div>
            <Hamburger showing={showMenu} onClick={onBurgerClick} />
            <Drawer
                anchor="right"
                open={showMenu}
                onClose={toggleDrawer(false)}>
                <StyledMobileNavItems>
                    <BaseNavItems
                        activePage={activePage}
                        onClick={onNavItemClick}
                    />
                    <AuthNavItems
                        onLogin={onLogIn}
                        onLogout={onLogOut}
                        loggedIn={!!id}
                        onDashboardClick={onNavItemClick}
                    />
                </StyledMobileNavItems>
            </Drawer>
        </StyledMobileNav>
    )
}

export default MobileNav
