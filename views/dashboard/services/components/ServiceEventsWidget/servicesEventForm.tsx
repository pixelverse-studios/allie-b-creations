import { useEffect, useState } from 'react'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { TextField, FileUpload } from '@/components/form'
import { FileItem, FilesList } from '@/components/form/fields/FileUpload'
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
    title: '',
    img: []
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
    const [files, setFiles] = useState<FileItem[] | []>([])

    useEffect(() => {
        const hasData = Object.values(store).some(item => !!item)
        if (hasData && !isDataImported) {
            handleImport(store)
        }
    }, [store, isDataImported])

    return (
        <StyledServicesEventform>
            <h3>{renderLabel}</h3>
            <StyledFieldSet>
                <FileUpload
                    context="serviceEvents"
                    files={files}
                    label="Upload image"
                    multiple={false}
                    setFiles={setFiles}
                />
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
            </StyledFieldSet>
        </StyledServicesEventform>
    )
}

export default ServicesEventForm
