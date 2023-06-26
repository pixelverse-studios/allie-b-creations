import { MouseEventHandler } from 'react'
import { StyledCircleIconButton } from './StyledButtons'

interface CircleIconButtonProps {
    children: React.ReactNode
    onClickEvent: MouseEventHandler<HTMLButtonElement> | (() => void)
}

const CircleIconButton = ({
    children,
    onClickEvent
}: CircleIconButtonProps) => {
    return (
        <StyledCircleIconButton onClick={onClickEvent}>
            {children}
        </StyledCircleIconButton>
    )
}

export default CircleIconButton
