import { useState } from 'react'

import { Close, Edit } from '@mui/icons-material'

import { StyledContactLinkCard } from './StyledCards'

const ContactLinkCard = ({ field }: any) => {
    const [deleteFocus, setDeleteFocus] = useState<number>(0)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const { id, icon, label, link } = field
    const onDeleteTestimonial = async () => {
        const CONFIRMED_CLICK = 2
        try {
            if (deleteFocus === CONFIRMED_CLICK) {
                console.log('deleted')
                setDeleteFocus(0)
            } else {
                setDeleteFocus(deleteFocus + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onDeleteFocus = () => setDeleteFocus(1)
    const onDeleteBlur = () => setDeleteFocus(0)

    const onEditModeChange = () => {
        console.log('editing', id)
        setIsEditMode(!isEditMode)
    }
    return (
        <StyledContactLinkCard>
            <div className="link-card">
                <div className="button-group">
                    <button className="edit-button" onClick={onEditModeChange}>
                        <Edit />
                    </button>
                    <button
                        onClick={onDeleteTestimonial}
                        onFocus={onDeleteFocus}
                        onBlur={onDeleteBlur}
                        className="delete-button">
                        <span>Confirm Delete</span>
                        <Close />
                    </button>
                </div>
            </div>
        </StyledContactLinkCard>
    )
}

export default ContactLinkCard
