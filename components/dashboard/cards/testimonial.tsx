import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { setTestimonials, setDisplay } from '@/lib/redux/slices/testimonials'
import { StyledTestimonialCard, StyledTestimonialInput } from './StyledCards'
import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
import {
    updateTestimonialDisplay,
    createTestimonials
} from '@/lib/db/cms/testimonials'

const TestimonialCard = ({ field }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const [isFlipped, setIsFlipped] = useState(false)
    const { display, email, id, name, rating, review } = field

    const handleDisplayChange = (event: {
        target: { id: string; checked: boolean }
    }) => {
        const { id, checked } = event.target
        dispatch(setDisplay({ id, checked }))
        updateTestimonialDisplay({ id, checked })
        // createTestimonials()
    }

    const toggleDeletionView = event => {
        setIsFlipped(!isFlipped)
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
                    checked={!!display}
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
