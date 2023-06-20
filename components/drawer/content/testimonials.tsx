import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { TextField, RatingField } from '@/components/form'
import { StyledFieldSet } from './StyledFormComponents'
import { FormEvent, useState } from 'react'

import { AppDispatch } from '@/lib/redux/store'
import { createTestimonials } from '@/lib/db/cms/testimonials'
import { setTestimonials } from '@/lib/redux/slices/testimonials'
const INITIAL_STATE = {
    name: { value: '' },
    email: { value: '' },
    rating: { value: 0 },
    review: {
        value: ''
    }
}

const {
    validAlphaNumericWithSpaces,
    validEmail,
    validAlphaNumericSpacesSpecials,
    validNonZeroNumber
} = FormValidations

const VALIDACHE = {
    name: validAlphaNumericWithSpaces,
    email: validEmail,
    review: validAlphaNumericSpacesSpecials,
    rating: validNonZeroNumber
}

const TestimonialForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [submitRatingError, setSubmitRatingError] = useState<boolean>(false)

    const { handleChange, handleFormSubmit, handleReset, form, isFormValid } =
        useForm(INITIAL_STATE, VALIDACHE)

    const { name, email, review, rating } = form
    const onSubmitTestimonial = async (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()

        const payload = {
            name: name?.value,
            email: email?.value,
            review: review?.value,
            rating: parseInt(rating?.value)
        }
        const freshTestimonials = await createTestimonials(payload)
        dispatch(setTestimonials(freshTestimonials))
        setSubmitRatingError(VALIDACHE.rating.test(rating.value))
        handleReset()
    }
    console.log(isFormValid)

    return (
        <form onSubmit={(e: any) => handleFormSubmit(e, onSubmitTestimonial)}>
            <StyledFieldSet>
                <div className="form-fields">
                    <TextField
                        field={form.name}
                        id="name"
                        label="Name"
                        type="text"
                        onChange={handleChange}
                    />
                    <TextField
                        field={form.email}
                        id="email"
                        label="Email"
                        type="email"
                        onChange={handleChange}
                    />
                    <RatingField
                        name="rating"
                        id="rating"
                        label="Rating"
                        field={form.rating}
                        onChange={handleChange}
                        submitError={submitRatingError}
                    />
                    <TextField
                        field={form.review}
                        id="review"
                        label="Review"
                        type="textarea"
                        onChange={handleChange}
                    />
                </div>
                <div className="button-group">
                    <Button
                        variant="outlined"
                        type="submit"
                        disabled={!isFormValid}>
                        Submit
                    </Button>
                    <Button variant="outlined" onClick={handleReset}>
                        Reset
                    </Button>
                </div>
            </StyledFieldSet>
        </form>
    )
}

export default TestimonialForm
