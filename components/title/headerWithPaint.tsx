import BackgroundLogo from '@/assets/Logo-Background.svg'
import { StyledTitleContainer } from './StyledHeader'

const HeaderWithPaintStreaks = ({
    title,
    className
}: {
    title: string
    className?: string
}) => {
    return (
        <StyledTitleContainer className={`title-container ${className}`}>
            <img src={BackgroundLogo.src} alt="" className="background-logo" />
            <h1 className="title">{title}</h1>
        </StyledTitleContainer>
    )
}

export default HeaderWithPaintStreaks
