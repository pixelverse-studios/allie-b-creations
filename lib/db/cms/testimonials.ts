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

export const createTestimonials = async () => {
    try {
        await addDoc(collection(db, 'testimonials'), {
            createdAt: formatDateTime(new Date()),
            display: false,
            email: 'kevina@yahoo.com',
            name: 'Leila',
            rating: 5,
            review: "I'm 1 today ! I loved my balloons at my party. I took so many pictures with them while holding my bottle of milk. I always try to have a bottle in my hand just like mommy and her wine. If daisy's weren't my favorite flower before today, they sure are now ! Thanks ABC !I'm 1 today ! I loved my balloons at my party. I took so many pictures with them while holding my bottle of milk. I always try to have a bottle in my hand just like mommy and her wine. If daisy's weren't my favorite flower before today, they sure are now ! Thanks ABC !I'm 1 today ! I loved my balloons at my party. I took so many pictures with them while holding my bottle of milk. I always try to have a bottle in my hand just like mommy and her wine. If daisy's weren't my favorite flower before today, they sure are now ! Thanks ABC !"
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
