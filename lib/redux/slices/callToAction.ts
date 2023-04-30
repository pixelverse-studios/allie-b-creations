import { createSlice } from '@reduxjs/toolkit'
import { CallToActionProps } from '@/utils/types/redux'

const initialState: CallToActionProps = {
    buttonLabel: '',
    description: '',
    image: '',
    header: ''
}
export const callToActionSlice = createSlice({
    name: 'callToAction',
    initialState,
    reducers: {
        setCallToAction: (state, { payload }) => {
            state.buttonLabel = payload.buttonLabel
            state.description = payload.description
            state.image = payload.image
            state.header = payload.header
        },
        updateCallToAction: (state, { payload: { label, value } }) => {
            state[label] = value
        }
    }
})
export const { setCallToAction, updateCallToAction } = callToActionSlice.actions
export default callToActionSlice.reducer
