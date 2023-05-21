import { createSlice } from '@reduxjs/toolkit'
import { ContactPageProps } from '@/utils/types/redux'

const initialState = {
    all: [] as ContactPageProps[],
    contact: {} as ContactPageProps
}
export const contacts = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setAllContacts: (
            state,
            { payload }: { payload: ContactPageProps[] }
        ) => {
            state.all = payload
        },
        setSelectedContact: (
            state,
            { payload }: { payload: ContactPageProps }
        ) => {
            state.contact = payload
        }
    }
})
export const { setAllContacts, setSelectedContact } = contacts.actions
export default contacts.reducer
