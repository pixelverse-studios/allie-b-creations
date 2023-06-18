import { useRouter } from 'next/router'
import { ADD_NEW } from './OfferingCard'
import { StyledOfferingItem } from '../../StyledServicesWidget'

const OfferingItem = ({
    eventTitle,
    section,
    Icon
}: {
    eventTitle: string
    section: string
    Icon: any
}) => {
    const router = useRouter()

    const onItemClick = () => {
        const BASE_URL = '/dashboard/services/offerings'
        if (eventTitle === ADD_NEW) return router.push(`${BASE_URL}/add`)
        return router.push(
            `${BASE_URL}/${encodeURIComponent(section)}/${encodeURIComponent(
                eventTitle
            )}`
        )
    }
    return (
        <StyledOfferingItem onClick={onItemClick}>
            <span>{eventTitle}</span>
            <Icon />
        </StyledOfferingItem>
    )
}

export default OfferingItem
