import { MouseEventHandler } from 'react'
import { StyledHamburger } from './StyledNav'

const Hamburger = ({
    onClick,
    showing
}: {
    onClick: MouseEventHandler<HTMLDivElement>
    showing: boolean
}) => (
    <StyledHamburger className={showing ? 'open' : ''} onClick={onClick}>
        <div className="burger">
            <div className="bar topBar"></div>
            <div className="bar btmBar"></div>
        </div>
    </StyledHamburger>
)

export default Hamburger
