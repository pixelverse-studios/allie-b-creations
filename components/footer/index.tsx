import { useSelector } from 'react-redux'
import { Instagram, LinkedIn, MailOutline } from '@mui/icons-material'
import { SocialMenuItems } from '@/utils/IconSelection'
import LogoImg from '../../assets/logo.svg'
import { StyledFooter } from './StyledFooter'

const Footer = () => {
    const contactLinks = useSelector((state: any) => state.contactLinks)
    return (
        <StyledFooter>
            <img src={LogoImg.src} alt="Logo" className="logo" />
            <div className="social-icons">
                {contactLinks?.map((link: any) => {
                    const iconValue = SocialMenuItems.find(
                        option => option.value === link?.label
                    )
                    return iconValue?.icon
                })}
            </div>
            <small>&copy; ABC LLC 2023</small>
        </StyledFooter>
    )
}

export default Footer
