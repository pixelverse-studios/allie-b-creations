import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { setTestimonials, setDisplay } from '@/lib/redux/slices/testimonials'
import { StyledTestimonialCard, StyledTestimonialInput } from './StyledCards'
import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import {
    updateTestimonialDisplay,
    createTestimonials
} from '@/lib/db/cms/testimonials'
import { ChangeEvent } from 'react'

const TestimonialCard = ({ field }: any) => {
    const dispatch = useDispatch<AppDispatch>()

    const { display, email, id, name, rating, review } = field

    const handleDisplayChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { id, checked }
        } = event
        dispatch(setDisplay({ id, checked }))
        updateTestimonialDisplay({ id, checked })
        // createTestimonials()
    }

    return (
        <StyledTestimonialCard>
            <div className="header">
                <h3>{name}</h3>
                <span>{rating}/5</span>
            </div>
            {review}
            <footer>
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
                    htmlFor={id}></label>
            </footer>
        </StyledTestimonialCard>
    )
}

export default TestimonialCard
