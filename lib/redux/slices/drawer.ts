import { createSlice } from '@reduxjs/toolkit'
import { DrawerComponentProps } from '@/utils/types/redux'

const initialState: DrawerComponentProps = {
    content: '',
    showing: false,
    title: ''
}

export const drawerComponentSlice = createSlice({
    name: 'drawerComponent',
    initialState,
    reducers: {
        showDrawer: (state, { payload: { content, title } }) => {
            state.content = content
            state.showing = true
            state.title = title
        },
        closeDrawer: state => {
            state.content = initialState.content
            state.showing = initialState.showing
            state.title = initialState.title
        }
    }
})

export const { showDrawer, closeDrawer } = drawerComponentSlice.actions
export default drawerComponentSlice.reducer
