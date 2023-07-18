import { createSlice } from '@reduxjs/toolkit'
import { AboutPageProps } from '@/utils/types/redux'

const initialState: AboutPageProps[] = [
    {
        id: '',
        header: '',
        img: {
            name: '',
            src: '',
            title: '',
            type: ''
        },
        role: '',
        description: '',
        subHeader: '',
        title: '',
        name: ''
    }
]
export const aboutPageSlice = createSlice({
    name: 'aboutPage',
    initialState,
    reducers: {
        setAbout: (state, { payload }: { payload: AboutPageProps[] }) => {
            return (state = payload)
        }
    }
})
export const { setAbout } = aboutPageSlice.actions
export default aboutPageSlice.reducer
