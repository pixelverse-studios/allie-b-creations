import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'

import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { TextField, RatingField } from '@/components/form'
import { StyledFieldSet } from './StyledFormComponents'
import { FormEvent, useState } from 'react'

import { AppDispatch } from '@/lib/redux/store'

const INITIAL_STATE = {
    name: { value: '' },
    email: { value: '' },
    rating: { value: 0 },
    review: {
        value: ''
    }
}

const {
    validAlphaString,
    validEmail,
    validAlphaNumericSpacesSpecials,
    validNonZeroNumber
} = FormValidations

const VALIDACHE = {
    name: validAlphaString,
    email: validEmail,
    review: validAlphaNumericSpacesSpecials,
    rating: validNonZeroNumber
}

const TestimonialForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [submitRatingError, setSubmitRatingError] = useState<boolean>(false)

    const { handleChange, handleFormSubmit, handleReset, form } = useForm(
        INITIAL_STATE,
        VALIDACHE
    )

    const { name, email, review, rating } = form
    const submitTestimonial = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        // console.log('Name', name.value)
        // console.log('Email" ', email.value)
        // console.log('Review', review.value)
        // console.log('Rating;', rating.value)
        setSubmitRatingError(VALIDACHE.rating.test(rating.value))
    }

    return (
        <form onSubmit={submitTestimonial}>
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
                    <Button variant="outlined" type="submit">
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
