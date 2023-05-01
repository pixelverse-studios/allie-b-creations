import { createSlice } from '@reduxjs/toolkit'
export const loadingSlice = createSlice({
    name: 'loading',
    initialState: false as boolean,
    reducers: {
        setLoading: (state, { payload }) => {
            state = payload
        }
    }
})
export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer
