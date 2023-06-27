import { useState } from 'react'
import { StyledContactLinkCard } from './StyledCard'
import EditDeleteForm from './EditDeleteForm'
import AddCancelForm from './AddCancelForm'

const ContactLinkCard = ({ field }: any) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const { id, icon, link } = field

    return (
        <StyledContactLinkCard>
            {!isEditMode ? (
                <EditDeleteForm
                    setIsEditMode={setIsEditMode}
                    id={id}
                    icon={icon}
                    link={link}
                />
            ) : (
                <AddCancelForm
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
