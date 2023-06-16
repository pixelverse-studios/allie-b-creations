import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { setDisplay, setTestimonials } from '@/lib/redux/slices/testimonials'
import { StyledTestimonialCard, StyledTestimonialInput } from './StyledCards'

import { Rating } from '@mui/material'
import {
    updateTestimonialDisplay,
    deleteTestimonialCollection,
    createTestimonials,
    getTestimonials
} from '@/lib/db/cms/testimonials'

import { ChangeEvent } from 'react'
import { Close } from '@mui/icons-material'

const TestimonialCard = ({ field }: any) => {
    const dispatch = useDispatch<AppDispatch>()

    const { display, email, id, name, rating, review, createdAt } = field

    const handleDisplayChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { id, checked }
        } = event

        dispatch(setDisplay({ id, checked }))
        updateTestimonialDisplay({ id, checked })
    }

    const deleteTestimonial = async (id: string) => {
        try {
            const testimonialData = await deleteTestimonialCollection(id)
            dispatch(setTestimonials(testimonialData))
        } catch (error) {
            throw error
        }
    }

    const addSomeShit = async () => {
        createTestimonials()
        const testimonialData = await getTestimonials()
        dispatch(setTestimonials(testimonialData))
    }
    return (
        <StyledTestimonialCard className={`${display ? 'show' : 'hide'}`}>
            {/* <button onClick={addSomeShit}>add</button> */}
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
                    <Close
                        className="close"
                        onClick={() => {
                            deleteTestimonial(id)
                        }}
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
