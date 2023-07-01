import Link from 'next/link'
import { useRouter } from 'next/router'
import ServicesEventForm from './servicesEventForm'
import { StyledServicesWidget } from '../../StyledServicesWidget'

const STORE = { description: '', img: '', title: '' }

const AddNewEventWidget = () => {
    const { query } = useRouter()

    return (
        <StyledServicesWidget>
            <h2>
                <Link href="/dashboard/services">Services</Link>
                <span>/</span> Add
            </h2>
            <ServicesEventForm
                id=""
                section={decodeURIComponent((query?.eventType as string) ?? '')}
                store={STORE}
                label="Adding"
            />
        </StyledServicesWidget>
    )
}

export default AddNewEventWidget
