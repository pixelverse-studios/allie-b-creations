import { useState } from 'react'
import { Drawer } from '@mui/material'
import { StyledDrawer } from './StyledDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from '@/lib/redux/slices/drawer'

const FormDrawer = () => {
    const dispatch = useDispatch()
    const { drawerDisplay, showDrawer } = useSelector(
        (state: any) => state.drawerComponent
    )

    return (
        <StyledDrawer>
            <Drawer
                anchor="right"
                open={showDrawer}
                PaperProps={{ style: { width: '25%' } }}>
                <span
                    onClick={() =>
                        dispatch(
                            setDrawer({
                                drawerDisplay: null,
                                showDrawer: false
                            })
                        )
                    }>
                    Close
                </span>
                {drawerDisplay}
            </Drawer>
        </StyledDrawer>
    )
}

export default FormDrawer
