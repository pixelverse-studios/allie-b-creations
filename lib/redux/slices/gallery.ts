import { createSlice } from '@reduxjs/toolkit'
import { GalleryImageType } from '@/utils/types/redux'

const initialState = {
    images: [],
    tags: []
} as {
    images: GalleryImageType[]
    tags: string[]
}
export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setGallery: (state, { payload }: { payload: GalleryImageType[] }) => {
            const tags = payload
                .map(item => item.tags)
                .flat()
                .filter(item => item)
            const filteredTags = tags.filter(
                (item, index) => tags.indexOf(item) === index
            )
            state.images = payload
            state.tags = filteredTags as string[]
        }
    }
})
export const { setGallery } = gallerySlice.actions
export default gallerySlice.reducer
