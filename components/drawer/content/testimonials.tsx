import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'

import useForm from '@/utils/hooks/useForm'
import { TextField, RatingField } from '@/components/form'
import { StyledFieldSet } from './StyledFormComponents'
import { FormEvent } from 'react'

import { AppDispatch } from '@/lib/redux/store'

const INITIAL_STATE = {
    name: { value: '' },
    email: { value: '' },
    rating: { value: 0 },
    review: {
        value: ''
    }
}

const TestimonialForm = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { handleChange, handleFormSubmit, handleReset, form } =
        useForm(INITIAL_STATE)

    const submitTestimonial = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
    }
    return (
        <form
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
                handleFormSubmit(event, submitTestimonial)
            }>
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
                        field={form.rating}
                        onChange={handleChange}
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
