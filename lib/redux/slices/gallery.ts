import { createSlice } from '@reduxjs/toolkit'
import { GalleryImageType } from '@/utils/types/redux'

const initialState: GalleryImageType[] = []
export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setGallery: (state, { payload }: { payload: GalleryImageType[] }) => {
            return payload
        }
    }
})
export const { setGallery } = gallerySlice.actions
export default gallerySlice.reducer
