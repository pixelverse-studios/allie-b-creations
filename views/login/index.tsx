import { signInWithPopup, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { setUser } from '@/lib/redux/slices/user'
import { auth, googleProvider } from '@/lib/db/config'
import getValidatedUser from '@/lib/db/users/getValidatedUser'

const Login = () => {
    const dispatch = useDispatch()
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
            const { user: gUser } = await signInWithPopup(auth, googleProvider)
            const { authorized, user } = await getValidatedUser(gUser.email)
            if (authorized) {
                dispatch(setUser(user))

                // query for cms content
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
