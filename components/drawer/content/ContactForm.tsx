import { useMemo } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { FormRow } from '@/styles/components/form'
import { TextField, FileUpload, SelectField } from '@/components/form'
import { FormButtonGroup } from '@/components/form'
import { StyledFieldSet } from './StyledFormComponents'
import { handleCloudUpload } from '@/utils/fileConversions'

const LINE_BREAK = '%0D%0A'

type ContactFormProps = {
    onCloseDrawer: Function
}

const REQUIRED = [
    'firstName',
    'lastName',
    'phone',
    'email',
    'eventTime',
    'eventType',
    'eventLocation'
]
const INITIAL_STATE = {
    firstName: { value: '' },
    lastName: { value: '' },
    phone: { value: '' },
    email: { value: '' },
    eventTime: { value: null },
    eventType: { value: '' },
    eventLocation: { value: '' },
    description: { value: '' },
    img: { value: [] }
}

const VALIDACHE = {
    firstName: FormValidations.validAlphaNumericSpacesSpecials,
    lastName: FormValidations.validAlphaNumericSpacesSpecials,
    phone: FormValidations.validPhoneNumber,
    email: FormValidations.validEmail,
    eventTime: FormValidations.yolo,
    eventType: FormValidations.validAlphaNumericSpacesSpecials,
    eventLocation: FormValidations.validAlphaNumericSpacesSpecials,
    description: FormValidations.yolo,
    img: FormValidations.yolo
}

const ContactForm = ({ onCloseDrawer }: ContactFormProps) => {
    const {
        form,
        formLoading,
        handleChange,
        handleNonFormEventChange,
        handleFormSubmit,
        handleReset
    } = useForm(INITIAL_STATE, VALIDACHE, INITIAL_STATE)

    const disableSubmit = useMemo(
        () => !REQUIRED.every(field => form[field].value),
        [form]
    )

    const onDateTimeUpdate = (date: any) =>
        handleNonFormEventChange(date, 'eventTime')

    const onFilesChange = (files: any) => {
        handleNonFormEventChange(files, 'img')
    }

    const formatFormToBody = (cloudImg: string | null) => {
        const formElements = [`Hello ${form.firstName}`] as any
        Object.entries(form).forEach(
            ([key, field]: [key: string, value: any]) => {
                switch (key) {
                    case 'firstName':
                        formElements.push(
                            `First Name: ${field.value}${LINE_BREAK}-`
                        )
                        break
                    case 'lastName':
                        formElements.push(
                            `Last Name: ${field.value}${LINE_BREAK}-`
                        )
                        break
                    case 'phone':
                        formElements.push(
                            `Phone Number: ${field.value}${LINE_BREAK}-`
                        )
                        break
                    case 'email':
                        formElements.push(`Email: ${field.value}${LINE_BREAK}-`)
                        break
                    case 'eventTime':
                        formElements.push(
                            `Event Time: ${field.value}${LINE_BREAK}-`
                        )
                        break
                    case 'eventType':
                        formElements.push(
                            `Event Type: ${field.value}${LINE_BREAK}-`
                        )
                        break
                    case 'eventLocation':
                        formElements.push(
                            `Event Location: ${field.value}${LINE_BREAK}-`
                        )
                        break
                    case 'description':
                        if (form.description.value) {
                            formElements.push(
                                `Description: ${field.value}${LINE_BREAK}-`
                            )
                            break
                        }
                    case 'img':
                        if (cloudImg) {
                            formElements.push(
                                `Image(s): ${cloudImg}${LINE_BREAK}-`
                            )
                        }
                        break
                    default:
                        break
                }
            }
        )

        return formElements.join().replace(/-,/g, '')
    }

    const onFormSubmit = async () => {
        let cloudImg = null
        if (form.img.value[0].src) {
            cloudImg = await handleCloudUpload({
                base64: form.img.value[0].base64,
                context: 'client-request',
                filename: form.img.value[0].name
            })
        }
        const body = formatFormToBody(cloudImg)
        const link = document.createElement('a')
        link.href = `mailto: info@ezpzcoding.com?subject=New Quote Request&body=${body}`
        link.download = 'image file name here'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <form onSubmit={e => handleFormSubmit(e, onFormSubmit)}>
            <StyledFieldSet>
                <FormRow>
                    <TextField
                        field={form.firstName}
                        id="firstName"
                        label="First Name"
                        type="text"
                        onChange={handleChange}
                    />
                    <TextField
                        field={form.lastName}
                        id="lastName"
                        label="Last Name"
                        type="text"
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.email}
                        id="email"
                        label="Email"
                        type="text"
                        onChange={handleChange}
                    />
                    <TextField
                        field={form.phone}
                        id="phone"
                        label="Phone Number"
                        type="text"
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <DateTimePicker
                        label="Date & Time of Event"
                        value={form.eventTime.value}
                        onChange={onDateTimeUpdate}
                    />
                    <SelectField
                        field={form.eventType}
                        name="eventType"
                        label="Event Type"
                        onChange={handleNonFormEventChange}
                        items={[
                            { value: 'Indoors', label: 'Indoors' },
                            { value: 'Outdoors', label: 'Outdoors' }
                        ]}
                    />
                    <TextField
                        field={form.eventLocation}
                        id="eventLocation"
                        label="Event Location"
                        type="text"
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.description}
                        id="description"
                        label="Description"
                        type="textarea"
                        onChange={handleChange}
                        rows={5}
                        required={false}
                    />
                </FormRow>
                <FormRow>
                    <FileUpload
                        context="serviceEvents"
                        multiple={false}
                        files={form.img.value}
                        label="Upload Inspiration Image(s)"
                        setFiles={onFilesChange}
                    />
                </FormRow>
                <FormButtonGroup
                    disableSubmit={disableSubmit}
                    handleReset={handleReset}
                    loading={formLoading}
                />
            </StyledFieldSet>
        </form>
    )
}

export default ContactForm
