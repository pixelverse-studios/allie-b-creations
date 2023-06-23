import { useSelector } from 'react-redux'

import ContactLinkCard from '@/components/dashboard/cards/contactLink'

import { StyledFooterWedgie, StyledSubmissionCard } from './StyledFooterWidget'

const FooterWidget = () => {
    const contactLinks = useSelector((state: any) => state.contactLinks)

    return (
        <StyledFooterWedgie>
            <h1>Contact Links</h1>
            <StyledSubmissionCard></StyledSubmissionCard>
            <div className="footer-grid">
                {contactLinks.map((data: any) => {
                    return <ContactLinkCard field={data} key={data.label} />
                })}
            </div>
        </StyledFooterWedgie>
    )
}

export default FooterWidget
