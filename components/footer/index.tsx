import LogoImg from '../../assets/logo.svg'

import { Instagram, LinkedIn, MailOutline } from '@mui/icons-material'
import { StyledFooter } from './StyledFooter'

const Footer = () => {
    return (
        <StyledFooter>
            <img src={LogoImg.src} alt="Logo" className="logo" />
            <div className="social-icons">
                <div className="group">
                    <Instagram className="icon" />
                    <div className="icon-circle"></div>
                </div>
                <div className="group">
                    <LinkedIn className="icon" />
                    <div className="icon-circle"></div>
                </div>
                <div className="group">
                    <MailOutline className="icon" />
                    <div className="icon-circle"></div>
                </div>
            </div>
            <small>&copy; ABC LLC 2023</small>
        </StyledFooter>
    )
}

export default Footer
