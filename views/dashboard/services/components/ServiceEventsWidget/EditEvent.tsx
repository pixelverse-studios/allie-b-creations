import { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { enqueueSnackbar } from 'notistack'

import { deleteOfferingEvent, editOfferingEvent } from '@/lib/db/cms/services'
import { statuses, messages } from '@/utils/banners'
import { setServices } from '@/lib/redux/slices/services'
import ServicesEventForm from './servicesEventForm'
import { StyledServicesWidget } from '../../StyledServicesWidget'

const EditEventWidget = () => {
    const { query, push } = useRouter()
    const { eventType, offeringId } = query as {
        eventType: string
        offeringId: string
    }
    const dispatch = useDispatch()
    const { id: serviceID, offerings } = useSelector(
        (state: any) => state.services
    )

    const derivedSection = useMemo(
        () => decodeURIComponent((query?.eventType as string) ?? ''),
        [query]
    )

    const store = useMemo(() => {
        const currentOfferingSection = offerings?.find(
            (offering: any) => offering?.section === eventType
        )
        if (currentOfferingSection == null) return null
        const currentItem = currentOfferingSection?.events?.find(
            (event: any) => event?.title === offeringId
        )
        return { ...currentItem, img: [currentItem?.img] }
    }, [offerings])

    const onUpdate = async (payload: {
        img: { src: string; type: string; name: string }
        title: string
        description: string
    }) => {
        try {
            const freshServices = await editOfferingEvent(
                serviceID,
                derivedSection,
                payload,
                store.title
            )
            dispatch(setServices(freshServices))
            enqueueSnackbar('Your new Service Offering has been edited', {
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

    const onDelete = async () => {
        try {
            const freshServices = await deleteOfferingEvent(
                serviceID,
                derivedSection,
                store.title
            )
            dispatch(setServices(freshServices))
            enqueueSnackbar(`${store.title} has been deleted`, {
                variant: statuses.SUCCESS
            })
            push('/dashboard/services')
        } catch (error) {
            enqueueSnackbar(`There was a problem deleting ${store.title}`, {
                variant: statuses.ERROR
            })
        }
    }

    return (
        <StyledServicesWidget>
            <h2>
                <Link href="/dashboard/services">Services</Link>
                <span>/</span> Edit {decodeURIComponent(offeringId)}
            </h2>
            {store == null ? (
                <span>Loading...</span>
            ) : (
                <ServicesEventForm
                    handleUpdate={onUpdate}
                    handleDelete={onDelete}
                    store={store}
                    label={`Editing for ${derivedSection}`}
                />
            )}
        </StyledServicesWidget>
    )
}

export default EditEventWidget
