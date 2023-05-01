import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'

const getCallToAction = async () => {
    try {
        const callToActionRef = collection(db, 'call-to-action')
        const data = await getDocs(callToActionRef)
        const { buttonLabel, description, header, image } = data.docs[0].data()
        return {
            id: data.docs[0].id,
            buttonLabel,
            description,
            header,
            image
        }
    } catch (error) {
        throw error
    }
}

export { getCallToAction }
