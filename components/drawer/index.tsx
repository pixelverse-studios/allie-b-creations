import { Drawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import useBreakpoint from '@/utils/hooks/useWindowWidth'
import { closeDrawer } from '@/lib/redux/slices/drawer'
import { Close } from '@mui/icons-material'
import { DRAWER_TYPES } from '@/utils/constants'
import TestimonialForm from './content/testimonials'
import ContactForm from './content/ContactForm'
import { StyledDrawerHeader, StyledDrawerContent } from './StyledDrawer'

const { TESTIMONIAL, CLIENT_REQUEST } = DRAWER_TYPES

const FormDrawer = () => {
    const dispatch = useDispatch()
    const { content, showing, title } = useSelector(
        (state: any) => state.drawer
    )
    const { isMobile } = useBreakpoint()

    const onCloseDrawer = () => dispatch(closeDrawer())

    const renderDrawerBody = (contentType: string) => {
        switch (contentType) {
            case TESTIMONIAL:
                return <TestimonialForm onCloseDrawer={onCloseDrawer} />

            case CLIENT_REQUEST:
                return <ContactForm onCloseDrawer={onCloseDrawer} />
        }
    }

    const PaperWidth = isMobile
        ? '100%'
        : content === CLIENT_REQUEST
        ? '75%'
        : '50%'
    return (
        <Drawer
            anchor="right"
            open={showing}
            PaperProps={{ style: { width: PaperWidth } }}
            ModalProps={{ onClose: onCloseDrawer }}>
            <StyledDrawerContent>
                <StyledDrawerHeader>
                    <span>{title}</span>
                    <Close
                        className="close-icon"
                        onClick={() => onCloseDrawer()}
                    />
                </StyledDrawerHeader>
                {renderDrawerBody(content)}
            </StyledDrawerContent>
        </Drawer>
    )
}

export default FormDrawer
