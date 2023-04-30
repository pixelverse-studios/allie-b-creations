import { createSlice } from '@reduxjs/toolkit'
import { ServicesProps } from '@/utils/types/redux'

const initialState: ServicesProps = {
    description: [],
    offerings: [
        { events: [{ description: '', img: '', title: '' }], section: '' }
    ],
    pageHeader: ''
}
export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices: (state, { payload }) => {
            state.description = payload.description
            state.offerings = payload.offerings
            state.pageHeader = payload.pageHeader
        }
    }
})
export const { setServices } = servicesSlice.actions
export default servicesSlice.reducer
