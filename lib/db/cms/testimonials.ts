import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from 'firebase/firestore'
import { db } from '../config'
import { formatDateTime } from '@/utils/format/dates'

const TestimonialCollection = collection(db, 'testimonials')

const getTestimonials = async () => {
    try {
        const data = await getDocs(TestimonialCollection)
        return data.docs.map(doc => {
            const { display, name, rating, review, email, createdAt } =
                doc.data()
            return {
                id: doc.id,
                display,
                name,
                rating,
                review,
                email,
                createdAt
            }
        })
    } catch (error) {
        throw error
    }
}

export const createTestimonials = async (data: any) => {
    try {
        const { name, email, rating, review } = data
        await addDoc(collection(db, 'testimonials'), {
            createdAt: formatDateTime(new Date()),
            display: false,
            email: email,
            name: name,
            rating: rating,
            review: review
        })
        const testimonial = await getTestimonials()
        return testimonial
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

export const deleteTestimonialCollection = async (id: string) => {
    try {
        await deleteDoc(doc(db, 'testimonials', id))
        const testimonials = await getTestimonials()
        return testimonials
    } catch (error) {
        throw error
    }
}
export { getTestimonials }
