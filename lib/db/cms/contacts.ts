import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { ContactPageProps } from '@/utils/types/redux'

const getContacts = async (): Promise<ContactPageProps[]> => {
    try {
        const contactsRef = collection(db, 'contact-page')
        const data = await getDocs(contactsRef)
        return data.docs.map(doc => {
            const {
                firstName,
                lastName,
                email,
                phone,
                description,
                eventDate,
                eventLocation,
                eventType,
                inspirationImg,
                responded
            } = doc.data()
            return {
                id: doc.id,
                firstName,
                lastName,
                email,
                phone,
                description,
                eventDate,
                eventLocation,
                eventType,
                inspirationImg,
                responded
            }
        })
    } catch (error) {
        throw error
    }
}

// get contact by ID

export { getContacts }
