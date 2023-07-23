import { useState } from 'react'
import { Close } from '@mui/icons-material'

import { StyledConfirmActionButton } from './StyledButtons'

const ConfirmActionButton = ({
    onTriggerMutation,
    Icon,
    action = 'Delete'
}: {
    onTriggerMutation: any
    Icon?: any
    action?: string
}) => {
    const [actionFocus, setActionFocus] = useState<number>(0)

    const onActionFocus = () => setActionFocus(1)
    const onDeleteBlur = () => setActionFocus(0)
    const onConfirmDeleteClick = async (e: any) => {
        e?.preventDefault()
        const CONFIRMED_CLICK = 2
        const SHOW_CONFIRM = 1
        switch (actionFocus) {
            case CONFIRMED_CLICK:
                await onTriggerMutation()
                break
            case SHOW_CONFIRM:
                setActionFocus(actionFocus + 1)
                break
            default:
                break
        }
    }

    return (
        <StyledConfirmActionButton
            onClick={onConfirmDeleteClick}
            onFocus={onActionFocus}
            onBlur={onDeleteBlur}>
            <span>Confirm {action}</span>
            {Icon ? <Icon /> : <Close />}
        </StyledConfirmActionButton>
    )
}

export default ConfirmActionButton
