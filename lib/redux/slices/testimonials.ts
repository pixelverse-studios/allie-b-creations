import { createSlice } from '@reduxjs/toolkit'
import { TestimonialsProps } from '@/utils/types/redux'

const initialState: TestimonialsProps = {
    id: '',
    display: false,
    name: '',
    rating: 0,
    review: ''
}
export const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState: {
        reviews: [initialState]
    },
    reducers: {
        setTestimonials: (state, { payload }) => {
            state.reviews = payload
        }
    }
})
export const { setTestimonials } = testimonialsSlice.actions
export default testimonialsSlice.reducer
