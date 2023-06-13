import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'

const TestimonialCollection = collection(db, 'testimonials')

const getTestimonials = async () => {
    try {
        const data = await getDocs(TestimonialCollection)
        return data.docs.map(doc => {
            const { display, name, rating, review } = doc.data()
            return { id: doc.id, display, name, rating, review }
        })
    } catch (error) {
        throw error
    }
}

export { getTestimonials }
