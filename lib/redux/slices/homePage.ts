import { createSlice } from '@reduxjs/toolkit'
import { HomePageProps } from '@/utils/types/redux'

const initialState: HomePageProps[] = [
    {
        id: '',
        heroBanner: '',
        heroImg: {
            name: '',
            src: '',
            type: ''
        }
    }
]

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setHomePage: (state, { payload }: { payload: HomePageProps[] }) => {
            return (state = payload)
        }
    }
})
export const { setHomePage } = homePageSlice.actions
export default homePageSlice.reducer
