import { TestimonialsProps } from '@/utils/types/redux'
import { useSelector } from 'react-redux'
import TestimonialCard from '@/components/dashboard/cards/testimonial'
import { StyledTestimonialGrid } from './StyledTestimonials'
import { Close } from '@mui/icons-material'
import { SELECT_ACTIONS } from '@/utils/constants'
import SelectField from '@/components/form/fields/SelectField'
import { useState } from 'react'

const TestimonialWidget = () => {
    const { reviews } = useSelector((state: any) => state.testimonials)

    const { HIDDEN, HIGH_RATING, LOW_RATING, NEWEST, OLDEST, SHOW } =
        SELECT_ACTIONS
    const [displayFilter, setDisplayFilter] = useState<string>('')

    const handleDisplayFilter = (sortType: string) => {
        const getReviews = [...reviews]
        switch (sortType) {
            case SHOW:
                return getReviews.sort((a, b) => b.display - a.display)

            case HIDDEN:
                return getReviews.sort((a, b) => a.display - b.display)

            case LOW_RATING:
                return getReviews.sort((a, b) => a.rating - b.rating)

            case HIGH_RATING:
                return getReviews.sort((a, b) => b.rating - a.rating)

            case NEWEST:
                return getReviews.sort(
                    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )

            case OLDEST:
                return getReviews.sort(
                    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
                )

            default:
                return getReviews
        }
    }

    return (
        <>
            <SelectField
                displayFilter={displayFilter}
                setDisplayFilter={setDisplayFilter}
            />
            <StyledTestimonialGrid>
                {handleDisplayFilter(displayFilter)?.map(
                    (data: TestimonialsProps) => {
                        return <TestimonialCard field={data} key={data.id} />
                    }
                )}
            </StyledTestimonialGrid>
            {/* <h2>Hidden</h2> */}
            {/* <StyledTestimonialGrid>
                {reviews.map((data: TestimonialsProps) => {
                    if (!data.display) return <TestimonialCard field={data} />
                    return null
                })}
            </StyledTestimonialGrid> */}
        </>
    )
}

export default TestimonialWidget
