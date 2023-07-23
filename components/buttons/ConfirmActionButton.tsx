import { useState, useRef } from 'react'
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
    const ref = useRef() as any

    const [actionFocus, setActionFocus] = useState<number>(0)

    const onActionFocus = () => setActionFocus(1)
    const onActionBlur = () => setActionFocus(0)
    const onConfirmActionClick = async (e: any) => {
        e?.preventDefault()
        const CONFIRMED_CLICK = 2
        const SHOW_CONFIRM = 1
        switch (actionFocus) {
            case CONFIRMED_CLICK:
                await onTriggerMutation()
                ref.current.blur()
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
            ref={ref}
            onClick={onConfirmActionClick}
            onFocus={onActionFocus}
            onBlur={onActionBlur}>
            <span>Confirm {action}</span>
            {Icon ? <Icon /> : <Close />}
        </StyledConfirmActionButton>
    )
}

export default ConfirmActionButton
