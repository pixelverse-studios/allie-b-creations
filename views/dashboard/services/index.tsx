import GeneralServiceDataForm from './components/GeneralServiceDataForm'
import ServiceOfferingsForm from './components/ServiceOfferingsForm'
import { StyledServicesWidget } from './StyledServicesWidget'

const ServicesWidget = () => {
    return (
        <StyledServicesWidget>
            <h2>Services</h2>
            <GeneralServiceDataForm />
            <ServiceOfferingsForm />
        </StyledServicesWidget>
    )
}

export default ServicesWidget

// TODO:
// Build out the Edit Service Offering page (/dashboard/services/offerings/:section/:offering title)
// Build out the Add new Service Offering page (/dashboard/services/offerings/add)
// Add logic for Add New Event Section
