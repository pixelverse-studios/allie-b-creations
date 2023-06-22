import { useSelector } from 'react-redux'

import ContactLinkCard from '@/components/dashboard/cards/contactLink'
import { StyledFooterWedgie } from './StyledFooterWidget'

const FooterWidget = () => {
    const links = useSelector((state: any) => state.contactLinks)

    return (
        <StyledFooterWedgie>
            <h1>Contact Links</h1>
            {links.map((data: any) => {
                return <ContactLinkCard field={data} key={data.label} />
            })}
        </StyledFooterWedgie>
    )
}

export default FooterWidget
