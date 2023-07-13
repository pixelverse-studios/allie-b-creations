import { useMemo } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { Autocomplete, TextField as MuiTextField } from '@mui/material'
import usePlacesAutocomplete from 'use-places-autocomplete'
import { enqueueSnackbar } from 'notistack'

import { statuses } from '@/utils/banners'
import { createNewContact } from '@/lib/db/cms/contacts'
import { formatDateTime } from '@/utils/format/dates'
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
    'eventLocationType',
    'eventLocation'
]
const INITIAL_STATE = {
    firstName: { value: '' },
    lastName: { value: '' },
    phone: { value: '' },
    email: { value: '' },
    eventTime: { value: null },
    eventType: { value: '' },
    eventLocationType: { value: '' },
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
    eventType: FormValidations.yolo,
    eventLocationType: FormValidations.validAlphaNumericSpacesSpecials,
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

    const {
        value: locationValue,
        suggestions: { data },
        setValue
    } = usePlacesAutocomplete({
        debounce: 300
    })

    const disableSubmit = useMemo(
        () => !REQUIRED.every(field => form[field].value),
        [form]
    )

    const onDateTimeUpdate = (date: any) =>
        handleNonFormEventChange(date, 'eventTime')

    const onFilesChange = (files: any) => {
        handleNonFormEventChange(files, 'img')
    }

    const onLocationUpdate = (event: any, newValue: string) =>
        setValue(newValue)

    const onLocationSelect = (event: any, newValue: string | null) =>
        handleNonFormEventChange(newValue, 'eventLocation')

    const formatFormToBody = (cloudImg: string | null) => {
        const opening = [
            `Dear Allie B, ${LINE_BREAK} ${LINE_BREAK}-`,
            `I hope this email finds you well. My name is ${form.firstName.value} ${form.lastName.value}. ${LINE_BREAK} ${LINE_BREAK}-`,
            `I am planning a ${form.eventType.value} on ${formatDateTime(
                form.eventTime.value
            )} and I would love to discuss how you can help me make it a truly special event. ${LINE_BREAK} ${LINE_BREAK}-`,
            `Here are the event details: ${LINE_BREAK} -`,
            `Date and Time: ${formatDateTime(
                form.eventTime.value
            )} ${LINE_BREAK}-`,
            `Event Type: ${form.eventType.value} ${LINE_BREAK}-`,
            `Event Location: ${form.eventLocation.value} ${LINE_BREAK}-`,
            `Location Type: ${form.eventLocationType.value} ${LINE_BREAK} ${LINE_BREAK}-`
        ]

        if (form.description.value) {
            opening.push(
                `General Details: ${form.description.value} ${LINE_BREAK}-`
            )
        }

        if (cloudImg) {
            opening.push(`Inspiration image link: ${cloudImg} ${LINE_BREAK}-`)
        }

        const closing = [
            `${LINE_BREAK} I am available to discuss via email (${form.email.value}) or by phone (${form.phone.value}) to discuss my event in more detail. ${LINE_BREAK} ${LINE_BREAK}-`,
            `Thank you for your time and consideration.${LINE_BREAK} ${LINE_BREAK}-`,
            `Sincerely, ${LINE_BREAK} ${form.firstName.value}`
        ]

        const emailBody = [...opening, ...closing]
        return emailBody.join().replace(/-,/g, '')
    }

    const onFormSubmit = async () => {
        // TODO: set loading
        let cloudImg = '' as string
        if (form.img.value?.[0]?.src) {
            cloudImg = await handleCloudUpload({
                base64: form.img.value[0].base64,
                context: 'client-request',
                filename: form.img.value[0].name
            })
        }
        const body = formatFormToBody(cloudImg)
        const link = document.createElement('a')
        link.href = `mailto: info@alliebcreations.com?subject=New Quote Request&body=${body}`
        link.download = 'image file name here'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        const payload = {} as any
        Object.entries(form).forEach((field: any) => {
            if (field[0] === 'img' && field[1]?.value?.length > 0) {
                payload['img'] = {
                    src: cloudImg,
                    name: form.img.value[0].name,
                    type: form.img.value[0].type
                }
            } else {
                payload[field[0]] = field[1].value
            }
        })

        try {
            await createNewContact(payload)
            enqueueSnackbar('Your request has been submitted successfully!', {
                variant: statuses.SUCCESS
            })
        } catch (error) {
            enqueueSnackbar(
                'There was an issue with your request. Please try again or reach out to us for help.',
                {
                    variant: statuses.ERROR
                }
            )
        }
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
                    <TextField
                        field={form.eventType}
                        id="eventType"
                        label="Event Type"
                        type="text"
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <SelectField
                        field={form.eventLocationType}
                        name="eventLocationType"
                        label="Event Location Type"
                        onChange={handleNonFormEventChange}
                        items={[
                            { value: 'indoors', label: 'Indoors' },
                            { value: 'outdoors', label: 'Outdoors' }
                        ]}
                    />
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        onInputChange={onLocationUpdate}
                        onChange={onLocationSelect}
                        options={data?.map(location => location.description)}
                        renderInput={params => (
                            <MuiTextField
                                {...params}
                                value={locationValue}
                                id="eventLocation"
                                label="Event Location"
                                // onChange={onLocationUpdate}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search'
                                }}
                            />
                        )}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        field={form.description}
                        id="description"
                        label="Description (event theme, details, color scheme, etc.)"
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
