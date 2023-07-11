import { useMemo } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { FormRow } from '@/styles/components/form'
import { TextField, FileUpload, SelectField } from '@/components/form'
import { FormButtonGroup } from '@/components/form'
import { StyledFieldSet } from './StyledFormComponents'

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

    return (
        <form>
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
                    />
                </FormRow>
                <FormRow>
                    <FileUpload
                        context="serviceEvents"
                        files={form.img.value}
                        label="Upload Inspiration Image(s)"
                        multiple
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
