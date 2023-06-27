import { useEffect } from 'react'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { TextField, FileDragAndDrop } from '@/components/form'
import { StyledFieldSet } from '@/components/drawer/content/StyledFormComponents'
import { StyledServicesEventform } from '../../StyledServicesWidget'

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
    description: '',
    img: '',
    title: ''
}

const validations = {
    description: FormValidations.yolo,
    img: FormValidations.yolo,
    title: FormValidations.yolo
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
    const renderLabel =
        label === 'Adding'
            ? `Adding a new event to ${section}`
            : `Editing event for ${section}`

    const {
        disableSubmit,
        handleChange,
        form,
        formLoading,
        handleImport,
        isDataImported,
        handleFormSubmit
    } = useForm(initialState, validations, store)

    useEffect(() => {
        const hasData = Object.values(store).some(item => !!item)
        if (hasData && !isDataImported) {
            handleImport(store)
        }
    }, [store, isDataImported])

    return (
        <StyledServicesEventform>
            <h6>{renderLabel}</h6>
            <StyledFieldSet>
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
                {/* <TextField
                    field={form.img}
                    id="img"
                    label="Event img"
                    type="file"
                    onChange={handleChange}
                /> */}
                <FileDragAndDrop id="yer" label="Upload it, yer" />
            </StyledFieldSet>
        </StyledServicesEventform>
    )
}

export default ServicesEventForm
