import { createSlice } from '@reduxjs/toolkit'
import { ContactLinkProps } from '@/utils/types/redux'

const initialState: ContactLinkProps = {
    icon: '',
    label: '',
    link: ''
}
export const contactLinks = createSlice({
    name: 'contactLinks',
    initialState,
    reducers: {
        setContactLinks: (state: ContactLinkProps, { payload }) => {
            state.icon = payload.icon
            state.label = payload.label
            state.link = payload.link
        },
        updateContactLinks: (state, { payload: { label, value } }) => {
            state[label] = value
        }
    }
})
export const { setContactLinks, updateContactLinks } = contactLinks.actions
export default contactLinks.reducer
