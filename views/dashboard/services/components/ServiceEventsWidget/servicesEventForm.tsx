import { useEffect, useMemo } from 'react'
import { enqueueSnackbar } from 'notistack'
import { useSelector, useDispatch } from 'react-redux'

import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { addOfferingEvent } from '@/lib/db/cms/services'
import { TextField, FileUpload, FormButtonGroup } from '@/components/form'
import { handleCloudUpload } from '@/utils/fileConversions'
import { StyledFieldSet } from '@/components/drawer/content/StyledFormComponents'
import { statuses, messages } from '@/utils/banners'
import { StyledServicesEventform } from '../../StyledServicesWidget'
import { setServices } from '@/lib/redux/slices/services'

interface EventFormFields {
    description?: string
    img?: string
    title?: string
}

interface ServicesEventFormTypes extends EventFormFields {
    id: string
    section: string
    label: 'Adding' | 'Editing'
    store: EventFormFields
}

const initialState = {
    description: { value: '' },
    title: { value: '' },
    img: { value: [] }
}

const validations = {
    description: FormValidations.yolo,
    title: FormValidations.yolo,
    img: FormValidations.yolo
}

const ServicesEventForm = ({
    id,
    section,
    description,
    img,
    title,
    label,
    store
}: ServicesEventFormTypes) => {
    const dispatch = useDispatch()
    const { id: serviceID } = useSelector((state: any) => state.services)

    const renderLabel =
        label === 'Adding'
            ? `Adding a new event to ${section}`
            : `Editing event for ${section}`

    const {
        handleChange,
        handleNonFormEventChange,
        form,
        formLoading,
        handleImport,
        isDataImported,
        handleFormSubmit,
        handleReset
    } = useForm(initialState, validations, store)

    useEffect(() => {
        const hasData = Object.values(store).some(item => !!item)
        if (hasData && !isDataImported) {
            handleImport(store)
        }
    }, [store, isDataImported])

    const onFilesChange = (files: any) => {
        handleNonFormEventChange(files, 'img')
    }

    const disableSubmit = useMemo(() => {
        const formStatuses = Object.entries(form).map(
            ([label, field]: [label: string, field: any]) => {
                if (label === 'img') {
                    return field.value?.length > 0
                }

                return !!field.value
            }
        )
        return !formStatuses.every(item => item)
    }, [form])

    const onFormSubmit = async () => {
        const payload = {} as any
        try {
            if (id == '') {
                payload.description = form.description.value
                payload.title = form.title.value
                payload.img = await handleCloudUpload({
                    base64: form.img.value[0].base64,
                    context: 'serviceEvents',
                    filename: form.img.value[0].contents.name
                })

                const freshServices = await addOfferingEvent(
                    serviceID,
                    section,
                    payload
                )
                dispatch(setServices(freshServices))
                handleReset()
                enqueueSnackbar('Your new Service Offering has been added', {
                    variant: statuses.SUCCESS
                })
            }
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
        <StyledServicesEventform
            onSubmit={(e: any) => handleFormSubmit(e, onFormSubmit)}>
            <h3>{renderLabel}</h3>
            <StyledFieldSet className="serviceEventFields">
                <FileUpload
                    context="serviceEvents"
                    files={form.img.value}
                    label="Upload image"
                    multiple={true}
                    setFiles={onFilesChange}
                />
                <div className="fields">
                    <TextField
                        field={form.description}
                        id="description"
                        label="Event Description"
                        type="text"
                        onChange={handleChange}
                    />
                    <TextField
                        field={form.title}
                        id="title"
                        label="Event Title"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </StyledFieldSet>
            <FormButtonGroup
                disableSubmit={disableSubmit}
                loading={formLoading}
                handleReset={handleReset}
            />
        </StyledServicesEventform>
    )
}

export default ServicesEventForm
