import { useEffect, useMemo } from 'react'

import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { TextField, FileUpload, FormButtonGroup } from '@/components/form'
import { handleCloudUpload } from '@/utils/fileConversions'
import { StyledFieldSet } from '@/components/drawer/content/StyledFormComponents'
import { StyledServicesEventform } from '../../StyledServicesWidget'

interface EventFormFields {
    description: string
    img: string
    title: string
}

interface ServicesEventFormTypes {
    label: string
    store: EventFormFields
    handleUpdate: Function
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
    label,
    store,
    handleUpdate
}: ServicesEventFormTypes) => {
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
        payload.description = form.description.value
        payload.title = form.title.value
        const cloudImg = await handleCloudUpload({
            base64: form.img.value[0].base64,
            context: 'serviceEvents',
            filename: form.img.value[0].name
        })
        payload.img = {
            src: cloudImg,
            type: form.img.value[0].type,
            name: form.img.value[0].name
        }
        await handleUpdate(payload)
        handleReset()
    }

    return (
        <StyledServicesEventform
            onSubmit={(e: any) => handleFormSubmit(e, onFormSubmit)}>
            <h3>{label}</h3>
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
