import { useState } from 'react'
import { Drawer } from '@mui/material'
import { StyledDrawer } from './StyledDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer } from '@/lib/redux/slices/drawer'

const FormDrawer = () => {
    const dispatch = useDispatch()
    const { drawerDisplay, showDrawer } = useSelector(
        (state: any) => state.drawer
    )

    return (
        <StyledDrawer>
            <Drawer
                anchor="right"
                open={showDrawer}
                PaperProps={{ style: { width: '50%' } }}>
                <span onClick={() => dispatch(closeDrawer())}>Close</span>
                {drawerDisplay}
            </Drawer>
        </StyledDrawer>
    )
}

export default FormDrawer
