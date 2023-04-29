import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/db/config'

export default async function getValidatedUser(email: string | null) {
    if (!email) {
        throw new Error('User email is required.')
    }
    const usersRef = collection(db, 'users')
    try {
        const userResponse = await getDocs(usersRef)
        const users = userResponse.docs.map(doc => {
            const { email, firstName, lastName } = doc.data()
            return { id: doc.id, email, firstName, lastName }
        })
        const authorizedUser = users.find(user => user.email === email)
        return authorizedUser == undefined
            ? {
                  authorized: false,
                  user: null
              }
            : {
                  authorized: true,
                  user: authorizedUser
              }
    } catch (error) {
        throw error
    }
}
