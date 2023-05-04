import { createSlice } from '@reduxjs/toolkit'
import { ContactPageProps } from '@/utils/types/redux'

const initialState: ContactPageProps = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    description: '',
    eventDate: null,
    eventLocation: '',
    eventType: 'indoors',
    inspirationImg: '',
    responded: false
}
export const contactPageSlice = createSlice({
    name: 'contactPage',
    initialState,
    reducers: {
        setContactPage: (state, { payload }: { payload: ContactPageProps }) => {
            state = payload
        }
    }
})
export const { setContactPage } = contactPageSlice.actions
export default contactPageSlice.reducer
