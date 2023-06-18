import { useSelector } from 'react-redux'
import OfferingCard from './OfferingCard'
import {
    StyledServicesBlock,
    StyledEventTypeCard
} from '../../StyledServicesWidget'

const ServiceOfferingsForm = () => {
    const servicesStore = useSelector((state: any) => state.services)
    const { offerings } = servicesStore

    return (
        <StyledServicesBlock>
            <h4>Offering Sections</h4>
            <div className="offeringSections">
                <div className="offeringSections">
                    {offerings.map((offering: any) => (
                        <OfferingCard
                            section={offering.section}
                            events={offering.events}
                        />
                    ))}
                    <StyledEventTypeCard className="offeringCard">
                        Add new
                    </StyledEventTypeCard>
                </div>
            </div>
        </StyledServicesBlock>
    )
}

export default ServiceOfferingsForm
