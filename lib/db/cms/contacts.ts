import { collection, getDocs } from 'firebase/firestore'
import { format } from 'date-fns'

import { db } from '../config'
import { ContactPageProps } from '@/utils/types/redux'
import { formatDbDateTime } from '@/utils/format/dates'

const getContacts = async (): Promise<ContactPageProps[]> => {
    try {
        const contactsRef = collection(db, 'client-requests')
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
                responded,
                createdAt
            } = doc.data()
            const formattedCreatedAt = format(
                new Date(createdAt.seconds),
                'MM/dd/yyyy hh:mm a'
            )
            const formattedCreatedDate = createdAt.toDate().toDateString()
            const formattedCreatedTime = createdAt
                .toDate()
                .toLocaleTimeString('en-US')
            // console.log(`${formattedCreatedDate} ${formattedCreatedTime}`)
            // console.log(
            //     'date: ',
            //     new Date(`${formattedCreatedDate} ${formattedCreatedTime}`)
            // )
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
                responded,
                createdAt: formattedCreatedAt
            }
        })
    } catch (error) {
        throw error
    }
}

// get contact by ID

export { getContacts }
