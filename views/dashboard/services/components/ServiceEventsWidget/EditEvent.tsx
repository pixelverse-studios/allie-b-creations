import { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import ServicesEventForm from './servicesEventForm'
import { StyledServicesWidget } from '../../StyledServicesWidget'

const EditEventWidget = () => {
    const { query } = useRouter()
    const { eventType, offeringId } = query as {
        eventType: string
        offeringId: string
    }
    const { offerings } = useSelector((state: any) => state.services)
    const editingData = useMemo(() => {
        const currentOfferingSection = offerings?.find(
            (offering: any) => offering?.section === eventType
        )
        if (currentOfferingSection == null) return null
        const currentItem = currentOfferingSection?.events?.find(
            (event: any) => event?.title === offeringId
        )
        return { ...currentItem, img: [currentItem?.img] }
    }, [offerings])

    return (
        <StyledServicesWidget>
            <h2>
                <Link href="/dashboard/services">Services</Link>
                <span>/</span> Edit {decodeURIComponent(offeringId)}
            </h2>
            {editingData == null ? (
                <span>Loading...</span>
            ) : (
                <ServicesEventForm
                    section={decodeURIComponent(
                        (query?.eventType as string) ?? ''
                    )}
                    store={editingData}
                    label="Adding"
                />
            )}
        </StyledServicesWidget>
    )
}

export default EditEventWidget
