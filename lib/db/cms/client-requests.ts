import { collection, getDocs, addDoc } from 'firebase/firestore'

import { db } from '../config'
import { ClientRequestProps } from '@/utils/types/redux'
import { formatDateTime } from '@/utils/format/dates'

const CLIENT_REQUESTS = 'client-requests'

const getClientRequests = async (): Promise<ClientRequestProps[] | []> => {
    const clientRequests = collection(db, CLIENT_REQUESTS)
    try {
        const data = await getDocs(clientRequests)
        return data.docs.map(doc => ({
            id: doc.id,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            email: doc.data().email,
            phone: doc.data().phone,
            description: doc.data()?.description ?? null,
            eventTime: doc.data().eventTime,
            eventType: doc.data().eventType,
            eventLocation: doc.data().eventLocation,
            eventLocationType: doc.data().eventLocationType,
            img: doc.data()?.img ?? null,
            responded: doc.data().responded,
            createdAt: doc.data().createdAt
        }))
    } catch (error) {
        throw error
    }
}

const createNewContact = async (payload: ClientRequestProps) => {
    try {
        await addDoc(collection(db, CLIENT_REQUESTS), {
            ...payload,
            eventTime: formatDateTime(new Date(payload.eventTime)),
            responded: false,
            createdAt: formatDateTime(new Date())
        })
    } catch (error) {
        throw error
    }
}

export { createNewContact, getClientRequests }
