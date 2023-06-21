import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar } from 'notistack'

import { AppDispatch } from '@/lib/redux/store'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { TextField, RatingField, FormButtonGroup } from '@/components/form'
import { createTestimonials } from '@/lib/db/cms/testimonials'
import { setTestimonials } from '@/lib/redux/slices/testimonials'
import bannerUtils from '@/utils/banners'
import { StyledFieldSet } from './StyledFormComponents'

const { statuses, messages } = bannerUtils

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

const TestimonialForm = ({ onCloseDrawer }: { onCloseDrawer: Function }) => {
    const dispatch = useDispatch<AppDispatch>()

    const {
        disableSubmit,
        form,
        formLoading,
        handleChange,
        handleFormSubmit,
        handleReset,
        isFormValid
    } = useForm(INITIAL_STATE, VALIDACHE, INITIAL_STATE)

    const { name, email, review, rating } = form
    const onSubmitTestimonial = async (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        try {
            const payload = {
                name: name?.value,
                email: email?.value,
                review: review?.value,
                rating: parseInt(rating?.value)
            }
            const freshTestimonials = await createTestimonials(payload)
            dispatch(setTestimonials(freshTestimonials))
            handleReset()
            enqueueSnackbar('Testimonial Created', {
                variant: statuses.SUCCESS
            })
            onCloseDrawer()
        } catch (error) {
            console.log(error)
            enqueueSnackbar(
                'There was an issue creating your testimonial. Please try again or reach out to us by the email in the footer.',
                {
                    variant: statuses.ERROR
                }
            )
        }
    }

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
                    />
                    <TextField
                        field={form.review}
                        id="review"
                        label="Review"
                        type="textarea"
                        onChange={handleChange}
                    />
                </div>
                <FormButtonGroup
                    disableSubmit={!disableSubmit && isFormValid}
                    handleReset={handleReset}
                    loading={formLoading}
                />
            </StyledFieldSet>
        </form>
    )
}

export default TestimonialForm
