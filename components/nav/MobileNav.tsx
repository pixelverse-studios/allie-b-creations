import { StyledMobileNav } from './StyledNav'
import { BaseNavItems, AuthNavItems } from './NavItems'
import Logo from '@/assets/logo.svg'

const MobileNav = () => {
    const onNavItemClick = (path: string) => {
        console.log(path)
    }

    return (
        <StyledMobileNav>
            <div className="brand">Allie B Creations</div>
            <ul>
                <BaseNavItems onClick={onNavItemClick} />
            </ul>
        </StyledMobileNav>
    )
}

export default MobileNav
