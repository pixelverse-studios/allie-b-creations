import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { ServicesProps } from '@/utils/types/redux'

const getServices = async (): Promise<ServicesProps> => {
    try {
        const servicePageRef = collection(db, 'services')
        const data = await getDocs(servicePageRef)
        const { description, offerings, pageHeader } = data.docs[0].data()
        return {
            id: data.docs[0].id,
            description,
            offerings,
            pageHeader
        }
    } catch (error) {
        throw error
    }
}

export { getServices }
