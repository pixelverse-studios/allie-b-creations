import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../config'
import { ServicesProps } from '@/utils/types/redux'

const SERVICES = 'services'
const serviceCollection = collection(db, SERVICES)
const getServices = async (): Promise<ServicesProps> => {
    try {
        const data = await getDocs(serviceCollection)
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
): Promise<ServicesProps> => {
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

const addNewOfferingSection = async (
    id: string,
    offerings: { section: string; events: any }[]
): Promise<ServicesProps> => {
    try {
        const ref = doc(db, SERVICES, id)
        await updateDoc(ref, { offerings })
        const freshServices = await getServices()
        return freshServices
    } catch (error) {
        throw error
    }
}

export { addNewOfferingSection, getServices, updateGeneralServiceData }
