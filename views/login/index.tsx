import { signInWithPopup, signOut, getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { enqueueSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'

import { googleProvider } from '@/lib/db/config'
import { setUser, removeUser } from '@/lib/redux/slices/user'
import { setLoading } from '@/lib/redux/slices/app'
import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'
import { statuses, messages } from '@/utils/banners'

import Google from '/assets/Google__G__Logo.png'
import { StyledLoginPage } from './StyledLoginPage'

const Login = () => {
    const dispatch = useDispatch()
    const auth = getAuth()
    const router = useRouter()

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
                router.push('/')
            } else {
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
        } catch (error) {
            enqueueSnackbar(messages.TECHNICAL_DIFFICULTIES, {
                variant: statuses.ERROR
            })
        }
    }

    return (
        <StyledLoginPage>
            <div className="loginBlock">
                <h2>Welcome Back to Allie B Creations</h2>
                <button onClick={onLogIn}>
                    <img src={Google.src} alt="google_signin" />
                    LOG IN
                </button>
            </div>
        </StyledLoginPage>
    )
}

export default Login
