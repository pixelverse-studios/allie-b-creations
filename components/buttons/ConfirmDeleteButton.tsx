import { useState } from 'react'
import { Close } from '@mui/icons-material'

import { StyledConfirmDeleteButton } from './StyledButtons'

const ConfirmDeleteButton = ({
    onTriggerMutation,
    Icon
}: {
    onTriggerMutation: any
    Icon?: any
}) => {
    const [deleteFocus, setDeleteFocus] = useState<number>(0)

    const onDeleteFocus = () => setDeleteFocus(1)
    const onDeleteBlur = () => setDeleteFocus(0)
    const onConfirmDeleteClick = async (e: any) => {
        e?.preventDefault()
        const CONFIRMED_CLICK = 2
        const SHOW_CONFIRM = 1
        switch (deleteFocus) {
            case CONFIRMED_CLICK:
                await onTriggerMutation()
                break
            case SHOW_CONFIRM:
                setDeleteFocus(deleteFocus + 1)
                break
            default:
                break
        }
    }

    return (
        <StyledConfirmDeleteButton
            onClick={onConfirmDeleteClick}
            onFocus={onDeleteFocus}
            onBlur={onDeleteBlur}>
            <span>Confirm Delete</span>
            {Icon ? <Icon /> : <Close />}
        </StyledConfirmDeleteButton>
    )
}

export default ConfirmDeleteButton
