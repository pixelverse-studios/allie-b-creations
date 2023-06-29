import { useSelector } from 'react-redux'
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
                    if (iconValue?.value !== 'Email')
                        return (
                            <a
                                className="icon"
                                target="_blank"
                                href={link?.link}
                                rel="noopener noreferrer">
                                {iconValue?.icon}
                            </a>
                        )
                    return (
                        <a
                            className="icon"
                            target="_blank"
                            href={`mailto:${link?.link}`}>
                            {iconValue?.icon}
                        </a>
                    )
                })}
            </div>
            <small>&copy;Allie B Creations LLC 2023</small>
        </StyledFooter>
    )
}

export default Footer
