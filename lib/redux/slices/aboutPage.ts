import { createSlice } from '@reduxjs/toolkit'
import { AboutPageProps } from '@/utils/types/redux'

const initialState: AboutPageProps = {
    backgroundInfo: '',
    header: '',
    heroImg: '',
    profileImg: '',
    role: '',
    subHeader: '',
    title: ''
}
export const aboutPageSlice = createSlice({
    name: 'aboutPage',
    initialState,
    reducers: {
        setAbout: (state, { payload }) => {
            state.backgroundInfo = payload.backgroundInfo
            state.heroImg = payload.heroImg
            state.profileImg = payload.profileImg
            state.header = payload.header
            state.subHeader = payload.subHeader
            state.role = payload.role
            state.title = payload.title
        },
        updateAbout: (state, { payload: { label, value } }) => {
            state[label] = value
        }
    }
})
export const { setAbout, updateAbout } = aboutPageSlice.actions
export default aboutPageSlice.reducer
