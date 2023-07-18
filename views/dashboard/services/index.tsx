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
