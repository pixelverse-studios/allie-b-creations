import { createSlice } from '@reduxjs/toolkit'
import { DrawerComponentProps } from '@/utils/types/redux'

const initialState: DrawerComponentProps = {
    drawerDisplay: null,
    showDrawer: false
}

export const drawerComponentSlice = createSlice({
    name: 'drawerComponent',
    initialState,
    reducers: {
        setDrawer: (state, { payload }: { payload: DrawerComponentProps }) => {
            state.drawerDisplay = payload.drawerDisplay
            state.showDrawer = payload.showDrawer
        }
    }
})

export const { setDrawer } = drawerComponentSlice.actions
export default drawerComponentSlice.reducer
