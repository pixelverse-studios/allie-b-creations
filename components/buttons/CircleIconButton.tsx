import { MouseEventHandler } from 'react'
import { StyledCircleIconButton } from './StyledButtons'

interface CircleIconButtonProps {
    Icon: React.ReactNode
    onClickEvent: MouseEventHandler<HTMLButtonElement> | (() => void)
}

const CircleIconButton = ({ Icon, onClickEvent }: CircleIconButtonProps) => {
    return (
        <StyledCircleIconButton onClick={onClickEvent}>
            {Icon}
        </StyledCircleIconButton>
    )
}

export default CircleIconButton
