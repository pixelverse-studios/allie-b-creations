import { createSlice } from '@reduxjs/toolkit'
import { HomePageProps } from '@/utils/types/redux'

const initialState: HomePageProps = {
    header: '',
    heroImg: '',
    secondaryHeroImg: ''
}
export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setAbout: (state, { payload }) => {
            state.header = payload.header
            state.heroImg = payload.heroImg
            state.secondaryHeroImg = payload.secondaryHeroImg
        },
        updateAbout: (state, { payload: { label, value } }) => {
            state[label] = value
        }
    }
})
export const { setAbout, updateAbout } = homePageSlice.actions
export default homePageSlice.reducer
