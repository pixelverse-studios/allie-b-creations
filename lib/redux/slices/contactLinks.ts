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
        }
    }
})
export const { setContactLinks } = contactLinks.actions
export default contactLinks.reducer
