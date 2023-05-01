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
        setHomePage: (state, { payload }) => {
            state.header = payload.header
            state.heroImg = payload.heroImg
            state.secondaryHeroImg = payload.secondaryHeroImg
        },
        updateHomePage: (state, { payload: { label, value } }) => {
            state[label] = value
        }
    }
})
export const { setHomePage, updateHomePage } = homePageSlice.actions
export default homePageSlice.reducer
