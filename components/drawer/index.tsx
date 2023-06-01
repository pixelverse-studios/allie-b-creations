import { useState } from 'react'
import { Drawer } from '@mui/material'
import { StyledIcon } from './StyledDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer } from '@/lib/redux/slices/drawer'
import { Close } from '@mui/icons-material'

const FormDrawer = () => {
    const dispatch = useDispatch()
    const { content, showing } = useSelector((state: any) => state.drawer)

    return (
        <Drawer
            anchor="right"
            open={showing}
            PaperProps={{ style: { width: '50%' } }}>
            <StyledIcon
                className="close-icon"
                onClick={() => dispatch(closeDrawer())}>
                <Close />
            </StyledIcon>
            {content}
        </Drawer>
    )
}

export default FormDrawer
