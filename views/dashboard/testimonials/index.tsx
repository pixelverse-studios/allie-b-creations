import { useEffect, useState } from 'react'
import { TestimonialsProps } from '@/utils/types/redux'
import { useSelector } from 'react-redux'
import TestimonialCard from '@/components/dashboard/cards/testimonial'
import {
    StyledTestimonialGrid,
    StyledSortAndFilter
} from './StyledTestimonials'

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

    const handleDisplaySort = (sortType: string) => {
        const defaultReviews = handleDisplayFilter(displayFilter)

        switch (sortType) {
            case SHOW:
                return defaultReviews.sort(
                    (a: { display: number }, b: { display: number }) =>
                        b.display - a.display
                )

            case HIDDEN:
                return defaultReviews.sort(
                    (a: { display: number }, b: { display: number }) =>
                        a.display - b.display
                )

            case LOW_RATING:
                return defaultReviews.sort(
                    (a: { rating: number }, b: { rating: number }) =>
                        a.rating - b.rating
                )

            case HIGH_RATING:
                return defaultReviews.sort(
                    (a: { rating: number }, b: { rating: number }) =>
                        b.rating - a.rating
                )

            case NEWEST:
                return defaultReviews.sort(
                    (a: { createdAt: string }, b: { createdAt: string }) =>
                        Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )

            case OLDEST:
                return defaultReviews.sort(
                    (a: { createdAt: string }, b: { createdAt: string }) =>
                        Date.parse(a.createdAt) - Date.parse(b.createdAt)
                )

            default:
                return defaultReviews
        }
    }

    const handleDisplayFilter = (filterType: string) => {
        const getReviews = [...reviews]

        switch (filterType) {
            case SHOW_ALL:
                return getReviews

            case SHOW_DISPLAYED:
                const displayReviews = getReviews.filter(function (data) {
                    return data.display !== false
                })
                return displayReviews

            case SHOW_HIDDEN:
                const hiddenReviews = getReviews.filter(function (data) {
                    return data.display !== true
                })
                return hiddenReviews

            default:
                return getReviews
        }
    }

    return (
        <>
            <StyledSortAndFilter className="sort-&-filter">
                <RadioFieldGroup
                    displayFilter={displayFilter}
                    setDisplayFilter={setDisplayFilter}
                    handleDisplayFilter={handleDisplayFilter}
                />
                <SelectField
                    displaySort={displaySort}
                    setDisplaySort={setDisplaySort}
                />
            </StyledSortAndFilter>
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
