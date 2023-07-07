import { createSlice } from '@reduxjs/toolkit'
import { HomePageProps } from '@/utils/types/redux'

const initialState: HomePageProps = {
    id: '',
    heroBanner: '',
    heroImg: '',
    secondaryHeroImg: '',
    secondaryHeroBanner: ''
}
export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setHomePage: (state, { payload }: { payload: HomePageProps }) => {
            state.id = payload.id
            state.heroBanner = payload.heroBanner
            state.heroImg = payload.heroImg
            state.secondaryHeroImg = payload.secondaryHeroImg
            state.secondaryHeroBanner = payload.secondaryHeroBanner
        }
    }
})
export const { setHomePage } = homePageSlice.actions
export default homePageSlice.reducer
