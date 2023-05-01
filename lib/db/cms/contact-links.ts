import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'

const getContactLinks = async () => {
    try {
        const contactLinksRef = collection(db, 'contact-links')
        const data = await getDocs(contactLinksRef)
        return data.docs.map(doc => {
            const { icon, label, link } = doc.data()
            return {
                id: doc.id,
                icon,
                label,
                link
            }
        })
    } catch (error) {
        throw error
    }
}

export { getContactLinks }
