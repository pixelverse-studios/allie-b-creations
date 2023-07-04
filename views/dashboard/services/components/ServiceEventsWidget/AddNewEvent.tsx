import { useMemo } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { enqueueSnackbar } from 'notistack'

import ServicesEventForm from './servicesEventForm'
import { addOfferingEvent } from '@/lib/db/cms/services'
import { statuses, messages } from '@/utils/banners'
import { setServices } from '@/lib/redux/slices/services'
import { StyledServicesWidget } from '../../StyledServicesWidget'

const STORE = {
    description: '',
    img: [],
    title: ''
}

const AddNewEventWidget = () => {
    const { query } = useRouter()
    const dispatch = useDispatch()
    const { id: serviceID } = useSelector((state: any) => state.services)

    const derivedSection = useMemo(
        () => decodeURIComponent((query?.eventType as string) ?? ''),
        [query]
    )

    const onUpdate = async (payload: {
        img: { src: string; type: string; name: string }
        title: string
        description: string
    }) => {
        try {
            const freshServices = await addOfferingEvent(
                serviceID,
                derivedSection,
                payload
            )
            dispatch(setServices(freshServices))
            enqueueSnackbar('Your new Service Offering has been added', {
                variant: statuses.SUCCESS
            })
        } catch (error: any) {
            enqueueSnackbar(
                error.message === 'Image upload failed'
                    ? error.message
                    : messages.TECHNICAL_DIFFICULTIES,
                {
                    variant: statuses.ERROR
                }
            )
        }
    }

    return (
        <StyledServicesWidget>
            <h2>
                <Link href="/dashboard/services">Services</Link>
                <span>/</span> Add
            </h2>
            <ServicesEventForm
                store={STORE}
                label={`Adding a new event to ${derivedSection}`}
                handleUpdate={onUpdate}
            />
        </StyledServicesWidget>
    )
}

export default AddNewEventWidget
