import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

import DashboardPage from '@/views/dashboard'
import SpeedDial from '@/components/speeddial'
import Footer from '../footer'
import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'
import Nav from '../nav'
import StyledAuthWrapper from './StyledAuthWrapper'
import { removeUser, setUser } from '@/lib/redux/slices/user'
import { setLoading } from '@/lib/redux/slices/app'
import BalloonLoader from '@/components/loader'

const AuthWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.homePage)
    const isLoading = useSelector((state: any) => state.app.loading)

    const handleRouteChangeStart = () => dispatch(setLoading(true))
    const handleRouteChangeComplete = () => dispatch(setLoading(false))
    useEffect(() => {
        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeComplete)
        }
    }, [router])

    const auth = getAuth()
    useEffect(() => {
        if (!id) {
            dispatch(setLoading(true))
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
                // "do nothing" -Phil
                // oh yea ? lmfao
                //we striving for perfection then
                //else deez
            }
        })

        return () => listen()
    }, [])

    const basePath = router.pathname.split('/')[1]
    const isPageIncluded = (pages: string[]) => pages.includes(basePath)
    const isOnDashboard = isPageIncluded(['dashboard'])

    if (isOnDashboard) {
        return (
            <DashboardPage>
                {isLoading ? <BalloonLoader /> : children}
            </DashboardPage>
        )
    }

    return (
        <StyledAuthWrapper>
            <Nav />
            <main>{isLoading ? <BalloonLoader /> : children}</main>
            <SpeedDial />
            <Footer />
        </StyledAuthWrapper>
    )
}

export default AuthWrapper
