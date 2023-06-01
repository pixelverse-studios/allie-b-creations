import { createSlice } from '@reduxjs/toolkit'
import { DrawerComponentProps } from '@/utils/types/redux'

const initialState: DrawerComponentProps = {
    content: '',
    showing: false
}

export const drawerComponentSlice = createSlice({
    name: 'drawerComponent',
    initialState,
    reducers: {
        showDrawer: (state, { payload }) => {
            state.content = payload
            state.showing = true
        },
        closeDrawer: state => {
            state.content = initialState.content
            state.showing = initialState.showing
        }
    }
})

export const { showDrawer, closeDrawer } = drawerComponentSlice.actions
export default drawerComponentSlice.reducer
