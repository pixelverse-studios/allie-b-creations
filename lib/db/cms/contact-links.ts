import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc
} from 'firebase/firestore'
import { db } from '../config'
import { ContactLinkProps } from '@/utils/types/redux'

const getContactLinks = async (): Promise<ContactLinkProps[]> => {
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

const createContactLink = async (data: {
    icon: string
    label: string
    link: string
}) => {
    const { icon, label, link } = data

    try {
        await addDoc(collection(db, 'contact-links'), {
            icon,
            label,
            link
        })
        const contactLinks = await getContactLinks()
        return contactLinks
    } catch (deez) {
        throw deez
    }
}

const updateContactLink = async (data: {
    id: string
    link: string
    icon: string
}) => {
    const contactLinkRef = doc(db, 'contact-links', data.id)
    const { link, icon } = data
    try {
        await updateDoc(contactLinkRef, {
            link: link,
            icon: icon,
            label: icon
        })
    } catch (error) {
        throw error
    }
}

const deleteContactLink = async (id: string) => {
    try {
        await deleteDoc(doc(db, 'contact-links', id))
        const contactLinks = await getContactLinks()
        return contactLinks
    } catch (error) {
        throw error
    }
}
export {
    getContactLinks,
    updateContactLink,
    deleteContactLink,
    createContactLink
}
