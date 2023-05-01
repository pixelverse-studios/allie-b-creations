import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllCmsData } from '@/lib/db/methods'
import { auth } from '@/lib/db/config'

const AuthWrapper = ({ children }: { children: any }) => {
    const dispatch = useDispatch()
    const { email } = useSelector((state: any) => state.user)
    const { currentUser } = auth

    useEffect(() => {
        if (currentUser != null && !email) {
            getAllCmsData(dispatch).catch(error => console.error(error))
        }
    }, [auth, email, currentUser])
    return children
}

export default AuthWrapper
