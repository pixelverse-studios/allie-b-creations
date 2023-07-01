import { FormEvent } from 'react'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { TextField } from '@/components/form'
import { StyledForm } from './StyledFormView'

const INITIAL_STATE = {
    name: { value: '' },
    description: { value: '' },
    header: { value: '' },
    subHeader: {
        value: ''
    },
    profileImg: {
        value: ''
    },
    role: {
        value: ''
    },
    title: {
        value: ''
    }
}

const { validAlphaNumericSpacesSpecials } = FormValidations

const VALIDATION = {
    name: validAlphaNumericSpacesSpecials,
    description: validAlphaNumericSpacesSpecials,
    header: validAlphaNumericSpacesSpecials,
    subHeader: validAlphaNumericSpacesSpecials,
    profileImg: validAlphaNumericSpacesSpecials,
    role: validAlphaNumericSpacesSpecials,
    title: validAlphaNumericSpacesSpecials
}

const AboutMeFormView = ({ FormData }: any) => {
    console.log(FormData)
    const {
        disableSubmit,
        form,
        formLoading,
        handleChange,
        handleFormSubmit,
        handleReset,
        isFormValid
    } = useForm(INITIAL_STATE, VALIDATION, INITIAL_STATE)

    const { name, description, header, subHeader, profileImg, role, title } =
        form

    const onSubmitAboutPageEdit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('hey kevin')
    }
    return (
        <StyledForm
            onSubmit={(e: any) => handleFormSubmit(e, onSubmitAboutPageEdit)}>
            <div className="form-body">
                <TextField
                    field={form.header}
                    id="header"
                    label="Header"
                    type="text"
                    onChange={handleChange}
                />
            </div>
        </StyledForm>
    )
}

export default AboutMeFormView
