import { createSlice } from '@reduxjs/toolkit'
import { ContactLinkProps } from '@/utils/types/redux'

const initialState: ContactLinkProps[] = [
    { id: '', icon: '', label: '', link: '' }
]
export const contactLinks = createSlice({
    name: 'contactLinks',
    initialState,
    reducers: {
        setContactLinks: (
            state,
            { payload }: { payload: ContactLinkProps[] }
        ) => {
            return payload
        },
        updateContactLinks: (state, { payload }) => {
            const index = state.findIndex(data => data.id === payload.id)
            state[index].icon = payload.icon
            state[index].link = payload.link
            state[index].label = payload.icon
        }
    }
})
export const { setContactLinks, updateContactLinks } = contactLinks.actions
export default contactLinks.reducer
