import { createSlice } from '@reduxjs/toolkit'
import { ContactLinkProps } from '@/utils/types/redux'

export const contactLinks = createSlice({
    name: 'contactLinks',
    initialState: [{ icon: '', label: '', link: '' } as ContactLinkProps],
    reducers: {
        setContactLinks: (state, { payload }) => {
            state = payload
        }
    }
})
export const { setContactLinks } = contactLinks.actions
export default contactLinks.reducer
