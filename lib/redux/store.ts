import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'
import aboutPage from './slices/aboutPage'
import callToAction from './slices/callToAction'
import services from './slices/services'
import contactLinks from './slices/contactLinks'
import homePage from './slices/homePage'
import loading from './slices/loading'

export const store = configureStore({
    reducer: {
        user,
        aboutPage,
        callToAction,
        services,
        contactLinks,
        homePage,
        loading
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
