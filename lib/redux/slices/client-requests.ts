import { createSlice } from '@reduxjs/toolkit'
import { ClientRequestProps } from '@/utils/types/redux'

const initialState = {
    requests: [] as ClientRequestProps[],
    fetched: false,
    contact: {} as ClientRequestProps
}
export const clientRequests = createSlice({
    name: 'clientRequests',
    initialState,
    reducers: {
        setAllRequests: (
            state,
            { payload }: { payload: ClientRequestProps[] }
        ) => {
            state.requests = payload
        },
        setRequestsFetched: (state, { payload }) => {
            state.fetched = payload
        },
        setSelectedClient: (
            state,
            { payload }: { payload: ClientRequestProps }
        ) => {
            state.contact = payload
        }
    }
})
export const { setAllRequests, setSelectedClient, setRequestsFetched } =
    clientRequests.actions
export default clientRequests.reducer
