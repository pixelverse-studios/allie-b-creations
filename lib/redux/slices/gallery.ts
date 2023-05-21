import { createSlice } from '@reduxjs/toolkit'
import { GalleryProps } from '@/utils/types/redux'

const initialState = {
    items: [] as GalleryProps[]
}
export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setGallery: (state, { payload }: { payload: GalleryProps[] }) => {
            state.items = payload
        }
    }
})
export const { setGallery } = gallerySlice.actions
export default gallerySlice.reducer
