import { createSlice } from '@reduxjs/toolkit'
import { UserProps } from '@/utils/types/redux'

const initialState: UserProps = {
    email: '',
    firstName: '',
    lastName: '',
    loading: false
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload: { email, firstName, lastName } }) => {
            state.loading = false
            state.email = email
            state.firstName = firstName
            state.lastName = lastName
        },
        removeUser: state => {
            state = initialState
        },
        setLoading: (state, { payload }) => {
            state.loading = payload
        }
    }
})
export const { setUser, removeUser, setLoading } = userSlice.actions
export default userSlice.reducer
