import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

import DashboardPage from '@/views/dashboard'
import SpeedDial from '@/components/speeddial'
import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'
import Nav from '../nav'
import StyledAuthWrapper from './StyledAuthWrapper'
import { removeUser, setUser } from '@/lib/redux/slices/user'

const AuthWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.homePage)
    const auth = getAuth()
    useEffect(() => {
        if (!id) {
            getAllCmsData(dispatch).catch(error => console.error(error))
        }
    }, [id])
    useEffect(() => {
        const listen = onAuthStateChanged(auth, async user => {
            if (user) {
                const { authorized, user: validated } = await getValidatedUser(
                    user?.email
                )
                if (authorized) {
                    dispatch(setUser(validated))
                } else {
                    await signOut(auth)
                    dispatch(removeUser())
                }
            } else {
                // do nothing
            }
        })

        return () => listen()
    }, [])

    const basePath = router.pathname.split('/')[1]
    const isPageIncluded = (pages: string[]) => pages.includes(basePath)
    const isOnDashboard = isPageIncluded(['dashboard'])

    if (isOnDashboard) {
        const isOnSubPage = router.pathname.split('/')[2]
        return (
            <DashboardPage onSubPage={Boolean(isOnSubPage)}>
                {children}
            </DashboardPage>
        )
    }

    return (
        <StyledAuthWrapper>
            <Nav />
            <main>{children}</main>
            <footer>placeholder footer</footer>
            <SpeedDial />
        </StyledAuthWrapper>
    )
}

export default AuthWrapper
