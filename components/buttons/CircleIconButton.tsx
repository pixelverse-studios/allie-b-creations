import { StyledCircleIconButton } from './StyledButtons'

const CircleIconButton = ({
    children,
    onClickEvent
}: {
    children: any
    onClickEvent: any
}) => {
    return (
        <StyledCircleIconButton onClick={onClickEvent}>
            {children}
        </StyledCircleIconButton>
    )
}

export default CircleIconButton
