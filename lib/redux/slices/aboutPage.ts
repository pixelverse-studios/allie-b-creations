import { createSlice } from '@reduxjs/toolkit'
import { AboutPageProps } from '@/utils/types/redux'

const initialState: AboutPageProps = {
    id: '',
    header: '',
    profileImg: '',
    role: '',
    backgroundInfo: [''],
    subHeader: '',
    title: ''
}
export const aboutPageSlice = createSlice({
    name: 'aboutPage',
    initialState,
    reducers: {
        setAbout: (state, { payload }: { payload: AboutPageProps }) => {
            state.id = payload.id
            state.backgroundInfo = payload.backgroundInfo
            state.profileImg = payload.profileImg
            state.header = payload.header
            state.role = payload.role
        }
    }
})
export const { setAbout } = aboutPageSlice.actions
export default aboutPageSlice.reducer
