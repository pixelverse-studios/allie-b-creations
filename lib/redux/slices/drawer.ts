import { createSlice } from '@reduxjs/toolkit'
import { DrawerComponentProps } from '@/utils/types/redux'

const initialState: DrawerComponentProps = {
    drawerDisplay: '',
    showDrawer: false
}

export const drawerComponentSlice = createSlice({
    name: 'drawerComponent',
    initialState,
    reducers: {
        showDrawer: (state, { payload: { drawerDisplay } }) => {
            state.drawerDisplay = drawerDisplay
            state.showDrawer = true
        },
        closeDrawer: state => {
            state.drawerDisplay = initialState.drawerDisplay
            state.showDrawer = initialState.showDrawer
        }
    }
})

export const { showDrawer, closeDrawer } = drawerComponentSlice.actions
export default drawerComponentSlice.reducer
