import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllCmsData } from '@/lib/db/methods'
import { auth } from '@/lib/db/config'
import StyledAuthWrapper from './StyledAuthWrapper'

const AuthWrapper = ({ children }: { children: any }) => {
    const dispatch = useDispatch()
    const { email } = useSelector((state: any) => state.user)
    const { currentUser } = auth

    useEffect(() => {
        if (currentUser != null && !email) {
            console.log(1)
            getAllCmsData(dispatch).catch(error => console.error(error))
        }
    }, [auth, email, currentUser])

    return (
        <StyledAuthWrapper>
            <nav>placeholder nav</nav>
            <main>{children}</main>
            <footer>placeholder footer</footer>
        </StyledAuthWrapper>
    )
}

export default AuthWrapper
