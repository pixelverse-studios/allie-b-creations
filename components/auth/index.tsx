import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { getValidatedUser } from '@/lib/db/auth/users'
import { getAllCmsData } from '@/lib/db/methods'
import Nav from '../nav'
import StyledAuthWrapper from './StyledAuthWrapper'
import { setUser } from '@/lib/redux/slices/user'

const AuthWrapper = ({ children }: { children: any }) => {
    const dispatch = useDispatch()
    const { email } = useSelector((state: any) => state.user)
    const auth = getAuth()
    useEffect(() => {
        const listen = onAuthStateChanged(auth, async user => {
            if (user) {
                const { authorized, user: validated } = await getValidatedUser(
                    user?.email
                )
                if (authorized) {
                    dispatch(setUser(validated))
                    await getAllCmsData(dispatch).catch(error =>
                        console.error(error)
                    )
                } else {
                    // TODO: log the bitch ass out
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
