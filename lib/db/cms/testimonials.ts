import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../config'
import { formatDateTime } from '@/utils/format/dates'

const TestimonialCollection = collection(db, 'testimonials')

const getTestimonials = async () => {
    try {
        const data = await getDocs(TestimonialCollection)
        return data.docs.map(doc => {
            const { display, name, rating, review, email } = doc.data()
            return { id: doc.id, display, name, rating, review, email }
        })
    } catch (error) {
        throw error
    }
}

export const createTestimonials = async () => {
    try {
        await addDoc(collection(db, 'testimonials'), {
            createdAt: formatDateTime(new Date()),
            display: true,
            email: 'kevin.lacarrubba@yahoo.com',
            name: 'Kevin LaCarrubba',
            rating: 5,
            review: 'The giant balloon butt plug i ordered for my sex party was incredible . after a little deflation we even got it inside one of the guests !'
        })
    } catch (error) {
        throw error
    }
}

export const updateTestimonialDisplay = async (data: {
    id: string
    checked: boolean
}) => {
    const testimonialRef = doc(db, 'testimonials', data.id)
    try {
        await updateDoc(testimonialRef, {
            display: data.checked
        })
    } catch (error) {
        throw error
    }
}
export { getTestimonials }
