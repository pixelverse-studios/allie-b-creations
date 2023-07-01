import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { setDisplay, setTestimonials } from '@/lib/redux/slices/testimonials'
import { Rating } from '@mui/material'
import { enqueueSnackbar } from 'notistack'

import {
    updateTestimonialDisplay,
    deleteTestimonialCollection
} from '@/lib/db/cms/testimonials'
import { statuses, messages } from '@/utils/banners'
import { ConfirmDeleteButton } from '@/components/buttons'
import { StyledTestimonialCard, StyledTestimonialInput } from './StyledCards'

const TestimonialCard = ({ field }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const { display, id, name, rating, review, createdAt } = field

    const onDisplayStatusChange = async (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const {
            target: { id, checked }
        } = event
        dispatch(setDisplay({ id, checked }))
        await updateTestimonialDisplay({ id, checked })
    }

    const onDeleteTestimonial = async () => {
        try {
            const testimonialData = await deleteTestimonialCollection(id)
            dispatch(setTestimonials(testimonialData))
            enqueueSnackbar('Testimonial Deleted', {
                variant: statuses.SUCCESS
            })
        } catch (error) {
            enqueueSnackbar(messages.TECHNICAL_DIFFICULTIES, {
                variant: statuses.ERROR
            })
        }
    }

    return (
        <StyledTestimonialCard className={`${display ? 'show' : 'hide'}`}>
            <div className="card-header">
                <div className="button-group">
                    <StyledTestimonialInput
                        type="checkbox"
                        className="tgl tgl-flip"
                        id={id}
                        onChange={onDisplayStatusChange}
                        checked={display}
                    />
                    <label
                        className="tgl-btn"
                        data-tg-off="Show"
                        data-tg-on="Hide"
                        htmlFor={id}
                    />
                    <ConfirmDeleteButton
                        onTriggerMutation={onDeleteTestimonial}
                    />
                </div>
                <div className="title-group">
                    <h3>{name}</h3>
                    <Rating name="read-only" value={rating} readOnly />
                    <h6>{createdAt}</h6>
                </div>
            </div>
            <p className="review">{review}</p>
        </StyledTestimonialCard>
    )
}

export default TestimonialCard
