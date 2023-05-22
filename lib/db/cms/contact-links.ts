import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { ContactLinkProps } from '@/utils/types/redux'

const getContactLinks = async (): Promise<ContactLinkProps[]> => {
    try {
        const contactLinksRef = collection(db, 'contact-links')
        const data = await getDocs(contactLinksRef)
        return data.docs.map(doc => {
            console.log(doc)
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
