import LogoImg from '../../assets/logo.svg'

import { Instagram, LinkedIn, MailOutline } from '@mui/icons-material'
import { StyledFooter } from './StyledFooter'

const Footer = () => {
    return (
        <StyledFooter>
            <img src={LogoImg.src} alt="Logo" className="logo" />
            <div className="social-icons">
                <Instagram className="icon" />
                <LinkedIn className="icon" />
                <MailOutline className="icon" />
            </div>

            <small>&copy; ABC LLC 2023</small>
        </StyledFooter>
    )
}

export default Footer
