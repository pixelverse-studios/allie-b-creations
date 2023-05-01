import { signInWithPopup, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'

import { setUser } from '@/lib/redux/slices/user'
import { setAbout } from '@/lib/redux/slices/aboutPage'
import { setContactLinks } from '@/lib/redux/slices/contactLinks'
import { setHomePage } from '@/lib/redux/slices/homePage'
import { setServices } from '@/lib/redux/slices/services'
import { setCallToAction } from '@/lib/redux/slices/callToAction'
import { setLoading } from '@/lib/redux/slices/user'
import { auth, googleProvider } from '@/lib/db/config'
import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'

const Login = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state: any) => state.loading)
    const onSignOutClick = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            // banner
            console.error(error)
        }
    }
    const onSignInClick = async () => {
        try {
            dispatch(setLoading(true))
            const { user: gUser } = await signInWithPopup(auth, googleProvider)
            const { authorized, user } = await getValidatedUser(gUser.email)
            if (authorized) {
                const {
                    aboutPage,
                    contactLinks,
                    homePage,
                    services,
                    callToAction
                } = await getAllCmsData()

                dispatch(setUser(user))
                dispatch(setAbout(aboutPage))
                dispatch(setContactLinks(contactLinks))
                dispatch(setHomePage(homePage))
                dispatch(setServices(services))
                dispatch(setCallToAction(callToAction))

                dispatch(setLoading(false))
            } else {
                onSignOutClick()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <button onClick={onSignInClick}>sign in with google</button>
            <button onClick={onSignOutClick}>log out</button>
        </div>
    )
}

export default Login
