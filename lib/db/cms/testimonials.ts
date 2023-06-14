import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../config'

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

const createTestimonials = async () => {
    try {
        await addDoc(collection(db, 'testimonials'), {
            createdAt: Date.now(),
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
export { getTestimonials, createTestimonials }
