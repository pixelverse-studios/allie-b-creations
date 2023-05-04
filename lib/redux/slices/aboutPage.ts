import { createSlice } from '@reduxjs/toolkit'
import { AboutPageProps } from '@/utils/types/redux'

const initialState: AboutPageProps = {
    header: '',
    profileImg: '',
    role: '',
    backgroundInfo: ['']
}
export const aboutPageSlice = createSlice({
    name: 'aboutPage',
    initialState,
    reducers: {
        setAbout: (state, { payload }: { payload: AboutPageProps }) => {
            state.backgroundInfo = payload.backgroundInfo
            state.profileImg = payload.profileImg
            state.header = payload.header
            state.role = payload.role
        }
    }
})
export const { setAbout } = aboutPageSlice.actions
export default aboutPageSlice.reducer
