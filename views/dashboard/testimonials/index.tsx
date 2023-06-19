import { useEffect, useState } from 'react'
import { TestimonialsProps } from '@/utils/types/redux'
import { useSelector } from 'react-redux'
import TestimonialCard from '@/components/dashboard/cards/testimonial'

import { testimonialFilterMap, testimonialSortMap } from '@/utils/constants'
import SelectField from '@/components/form/fields/SelectField'
import RadioFieldGroup from '@/components/form/fields/RadioFieldGroup'
import {
    StyledTestimonialGrid,
    StyledSortAndFilter
} from './StyledTestimonials'

const TestimonialWidget = () => {
    const { reviews } = useSelector((state: any) => state.testimonials)
    const [displaySort, setDisplaySort] = useState<string>('')
    const [displayFilter, setDisplayFilter] = useState<string>('SHOW_ALL')
    const [displayReviews, setDisplayReviews] = useState<any>(null)

    useEffect(() => {
        if (displayReviews === null && reviews?.length) {
            setDisplayReviews(reviews)
        }
    }, [reviews, displayReviews])

    const handleDisplaySort = (sortType: string) => {
        const reviewsCopy = [...reviews]
        setDisplaySort(sortType)
        if (!sortType) {
            setDisplayReviews(reviewsCopy)
        } else {
            const sortedReviews = testimonialSortMap
                .get(sortType)
                ?.run(reviewsCopy)
            const filteredReviews = testimonialFilterMap
                .get(displayFilter)
                ?.run(sortedReviews)
            setDisplayReviews(filteredReviews)
        }
    }

    const handleDisplayFilter = (filterType: string) => {
        const reviewsCopy = [...reviews]
        setDisplayFilter(filterType)
        if (!filterType) {
            setDisplayReviews(reviewsCopy)
        } else {
            const filteredReviews = testimonialFilterMap
                .get(filterType)
                ?.run(reviewsCopy)
            const sortedReviews = testimonialSortMap
                .get(displaySort)
                ?.run(filteredReviews)
            setDisplayReviews(sortedReviews)
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
                    setDisplaySort={handleDisplaySort}
                />
            </StyledSortAndFilter>
            <StyledTestimonialGrid>
                {/* {handleDisplaySort(displaySort)?.map( */}
                {displayReviews?.map((data: TestimonialsProps) => {
                    return <TestimonialCard field={data} key={data.id} />
                })}
            </StyledTestimonialGrid>
        </>
    )
}

export default TestimonialWidget
