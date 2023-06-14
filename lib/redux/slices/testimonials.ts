import { createSlice } from '@reduxjs/toolkit'
import { TestimonialsProps } from '@/utils/types/redux'
import { emit } from 'process'

const initialState: TestimonialsProps = {
    id: '',
    display: false,
    name: '',
    rating: 0,
    review: '',
    email: ''
}
export const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState: {
        reviews: [initialState]
    },
    reducers: {
        setTestimonials: (state, { payload }) => {
            state.reviews = payload
        },
        setDisplay: (state, { payload }) => {
            const index = state.reviews.findIndex(
                data => data.id === payload.id
            )

            state.reviews[index].display = payload.checked
        }
    }
})
export const { setTestimonials, setDisplay } = testimonialsSlice.actions
export default testimonialsSlice.reducer
