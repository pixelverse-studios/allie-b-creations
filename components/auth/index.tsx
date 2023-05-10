import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'
import Nav from '../nav'
import StyledAuthWrapper from './StyledAuthWrapper'
import { removeUser, setUser } from '@/lib/redux/slices/user'

const AuthWrapper = ({ children }: { children: any }) => {
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

    return (
        <StyledAuthWrapper>
            <Nav />
            <main>{children}</main>
            <footer>placeholder footer</footer>
        </StyledAuthWrapper>
    )
}

export default AuthWrapper
