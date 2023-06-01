import { Drawer } from '@mui/material'
import { StyledDrawerHeader } from './StyledDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer } from '@/lib/redux/slices/drawer'
import { Close } from '@mui/icons-material'

const FormDrawer = () => {
    const dispatch = useDispatch()
    const { content, showing, title } = useSelector(
        (state: any) => state.drawer
    )

    return (
        <Drawer
            anchor="right"
            open={showing}
            PaperProps={{ style: { width: '50%' } }}>
            <StyledDrawerHeader>
                <span>{title}</span>
                <Close
                    className="close-icon"
                    onClick={() => dispatch(closeDrawer())}
                />
            </StyledDrawerHeader>
            {content}
        </Drawer>
    )
}

export default FormDrawer
