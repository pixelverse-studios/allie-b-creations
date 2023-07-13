import { createSlice } from '@reduxjs/toolkit'
import { GalleryProps } from '@/utils/types/redux'

const initialState = {
    nextUrl: '',
    images: [
        {
            media_url: '',
            caption: ''
        }
    ]
}
export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setGallery: (state, { payload }: { payload: GalleryProps }) => {
            return (state = payload)
        }
    }
})
export const { setGallery } = gallerySlice.actions
export default gallerySlice.reducer
