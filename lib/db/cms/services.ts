import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { db } from '../config'
import { ServicesProps } from '@/utils/types/redux'

const SERVICES = 'services'
const servicePageRef = collection(db, 'services')
const getServices = async (): Promise<ServicesProps> => {
    try {
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

const updateGeneralServiceData = async (
    id: string,
    fields: { description?: string; pageHeader?: string }
) => {
    try {
        const ref = doc(db, SERVICES, id)
        await updateDoc(ref, {
            ...fields
        })
        const services = await getServices()
        return services
    } catch (error) {
        throw error
    }
}

export { getServices, updateGeneralServiceData }
