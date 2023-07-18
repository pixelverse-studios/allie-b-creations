import { useState } from 'react'
import { StyledContactLinkCard } from './StyledCard'
import ViewDetails from './ViewDetails'
import EditDetails from './EditDetails'

const ContactLinkCard = ({ field }: any) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const { id, icon, link } = field

    return (
        <StyledContactLinkCard>
            {!isEditMode ? (
                <ViewDetails
                    setIsEditMode={setIsEditMode}
                    id={id}
                    icon={icon}
                    link={link}
                />
            ) : (
                <EditDetails
                    setIsEditMode={setIsEditMode}
                    id={id}
                    icon={icon}
                    link={link}
                />
            )}
        </StyledContactLinkCard>
    )
}

export default ContactLinkCard
