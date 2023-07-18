import { MouseEventHandler } from 'react'
import { StyledCircleIconButton } from './StyledButtons'

interface CircleIconButtonProps {
    Icon: any
    onClickEvent: MouseEventHandler<HTMLButtonElement> | (() => void)
    disabled?: boolean
}

const CircleIconButton = ({
    Icon,
    onClickEvent,
    disabled
}: CircleIconButtonProps) => {
    return (
        <StyledCircleIconButton disabled={disabled} onClick={onClickEvent}>
            {Icon}
        </StyledCircleIconButton>
    )
}

export default CircleIconButton
