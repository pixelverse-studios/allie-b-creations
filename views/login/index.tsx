import { signInWithPopup, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'

import { setUser } from '@/lib/redux/slices/user'
import { setLoading } from '@/lib/redux/slices/loading'
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
                await getAllCmsData(dispatch)
                dispatch(setUser(user))
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
