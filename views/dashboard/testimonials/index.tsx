import { useEffect, useState } from 'react'
import { TestimonialsProps } from '@/utils/types/redux'
import { useSelector } from 'react-redux'
import TestimonialCard from '@/components/dashboard/cards/testimonial'
import { StyledTestimonialGrid } from './StyledTestimonials'

import { SELECT_ACTIONS, RADIO_GROUP_ACTIONS } from '@/utils/constants'
import SelectField from '@/components/form/fields/SelectField'
import RadioFieldGroup from '@/components/form/fields/RadioFieldGroup'

const TestimonialWidget = () => {
    const { reviews } = useSelector((state: any) => state.testimonials)

    const { HIDDEN, HIGH_RATING, LOW_RATING, NEWEST, OLDEST, SHOW } =
        SELECT_ACTIONS

    const { SHOW_ALL, SHOW_DISPLAYED, SHOW_HIDDEN } = RADIO_GROUP_ACTIONS

    const [displaySort, setDisplaySort] = useState<string>('')
    const [displayFilter, setDisplayFilter] = useState<string>('SHOW_ALL')

    const [displayedReviews, setDisplayedReviews] = useState<any>([])

    const handleDisplaySort = (sortType: string) => {
        const defaultReviews = [...reviews]
        const getReviews = displayedReviews
        console.log(displaySort)
        switch (sortType) {
            case SHOW:
                return getReviews.sort(
                    (a: { display: number }, b: { display: number }) =>
                        b.display - a.display
                )

            case HIDDEN:
                return getReviews.sort(
                    (a: { display: number }, b: { display: number }) =>
                        a.display - b.display
                )

            case LOW_RATING:
                return getReviews.sort(
                    (a: { rating: number }, b: { rating: number }) =>
                        a.rating - b.rating
                )

            case HIGH_RATING:
                return getReviews.sort(
                    (a: { rating: number }, b: { rating: number }) =>
                        b.rating - a.rating
                )

            case NEWEST:
                return getReviews.sort(
                    (a: { createdAt: string }, b: { createdAt: string }) =>
                        Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )

            case OLDEST:
                return getReviews.sort(
                    (a: { createdAt: string }, b: { createdAt: string }) =>
                        Date.parse(a.createdAt) - Date.parse(b.createdAt)
                )

            default:
                if (getReviews.length === 0) {
                    return defaultReviews
                } else {
                    return getReviews
                }
        }
    }

    const handleDisplayFilter = (filterType: string) => {
        const getReviews = [...reviews]

        switch (filterType) {
            case SHOW_ALL:
                setDisplayFilter(filterType)
                return setDisplayedReviews(getReviews)

            case SHOW_DISPLAYED:
                setDisplayFilter(filterType)
                const displayReviews = getReviews.filter(function (data) {
                    return data.display !== false
                })
                return setDisplayedReviews(displayReviews)

            case SHOW_HIDDEN:
                setDisplayFilter(filterType)
                const hiddenReviews = getReviews.filter(function (data) {
                    return data.display !== true
                })
                return setDisplayedReviews(hiddenReviews)

            default:
                return getReviews
        }
    }

    return (
        <>
            <SelectField
                displaySort={displaySort}
                setDisplaySort={setDisplaySort}
            />
            <RadioFieldGroup
                displayFilter={displayFilter}
                handleDisplayFilter={handleDisplayFilter}
            />
            <StyledTestimonialGrid>
                {handleDisplaySort(displaySort)?.map(
                    (data: TestimonialsProps) => {
                        return <TestimonialCard field={data} key={data.id} />
                    }
                )}
            </StyledTestimonialGrid>
        </>
    )
}

export default TestimonialWidget
