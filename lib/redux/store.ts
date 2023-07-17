import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'
import aboutPage from './slices/aboutPage'
import services from './slices/services'
import contactLinks from './slices/contactLinks'
import homePage from './slices/homePage'
import testimonials from './slices/testimonials'
import gallery from './slices/gallery'
import clientRequests from './slices/client-requests'
import app from './slices/app'
import drawer from './slices/drawer'

export const store = configureStore({
    reducer: {
        user,
        aboutPage,
        services,
        contactLinks,
        homePage,
        testimonials,
        gallery,
        clientRequests,
        drawer,
        app
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
