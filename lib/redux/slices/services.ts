import { createSlice } from '@reduxjs/toolkit'
import { ServicesProps } from '@/utils/types/redux'

const initialState: ServicesProps = {
    id: '',
    description: '',
    offerings: [
        { events: [{ description: '', img: '', title: '' }], section: '' }
    ],
    pageHeader: ''
}
export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices: (state, { payload }: { payload: ServicesProps }) => {
            state.id = payload.id
            state.description = payload.description
            state.offerings = payload.offerings
            state.pageHeader = payload.pageHeader
        }
    }
})
export const { setServices } = servicesSlice.actions
export default servicesSlice.reducer
