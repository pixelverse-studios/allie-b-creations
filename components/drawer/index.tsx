import { useState } from 'react'
import { Drawer } from '@mui/material'
import { StyledDrawer } from './StyledDrawer'

const FormDrawer = () => {
    const [drawerState, setDrawerState] = useState(false)
    return (
        <StyledDrawer>
            <Drawer
                anchor="right"
                open={drawerState}
                PaperProps={{ style: { width: '25%' } }}></Drawer>
        </StyledDrawer>
    )
}

export default FormDrawer
