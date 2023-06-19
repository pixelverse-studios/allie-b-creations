import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { setDisplay, setTestimonials } from '@/lib/redux/slices/testimonials'
import { StyledTestimonialCard, StyledTestimonialInput } from './StyledCards'

import { Rating } from '@mui/material'
import {
    updateTestimonialDisplay,
    deleteTestimonialCollection
} from '@/lib/db/cms/testimonials'
import { enqueueSnackbar } from 'notistack'

import { ChangeEvent, useState } from 'react'
import { Close } from '@mui/icons-material'
import bannerUtils from '@/utils/banners'

const { statuses, messages } = bannerUtils

const TestimonialCard = ({ field }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const [deleteFocus, setDeleteFocus] = useState<number>(0)
    const { display, id, name, rating, review, createdAt } = field

    const handleDisplayChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { id, checked }
        } = event

        dispatch(setDisplay({ id, checked }))
        updateTestimonialDisplay({ id, checked })
    }

    const onDeleteTestimonial = async () => {
        const CONFIRMED_CLICK = 2
        try {
            if (deleteFocus === CONFIRMED_CLICK) {
                const testimonialData = await deleteTestimonialCollection(id)
                dispatch(setTestimonials(testimonialData))
                enqueueSnackbar('Testimonial Deleted', {
                    variant: statuses.SUCCESS
                })
                setDeleteFocus(0)
            } else {
                setDeleteFocus(deleteFocus + 1)
            }
        } catch (error) {
            enqueueSnackbar(messages.TECHNICAL_DIFFICULTIES, {
                variant: statuses.ERROR
            })
        }
    }

    const onDeleteFocus = () => setDeleteFocus(1)
    const onDeleteBlur = () => setDeleteFocus(0)

    return (
        <StyledTestimonialCard className={`${display ? 'show' : 'hide'}`}>
            <div className="card-header">
                <div className="button-group">
                    <StyledTestimonialInput
                        type="checkbox"
                        className="tgl tgl-flip"
                        id={id}
                        onChange={handleDisplayChange}
                        checked={display}
                    />
                    <label
                        className="tgl-btn"
                        data-tg-off="Show"
                        data-tg-on="Hide"
                        htmlFor={id}
                    />
                    <button
                        onClick={onDeleteTestimonial}
                        onFocus={onDeleteFocus}
                        onBlur={onDeleteBlur}>
                        <span>Confirm Delete</span>
                        <Close />
                    </button>
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
