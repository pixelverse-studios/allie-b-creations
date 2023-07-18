import { useState, useMemo } from 'react'
import { TestimonialsProps } from '@/utils/types/redux'
import { useSelector } from 'react-redux'
import TestimonialCard from '@/views/dashboard/testimonials/cards/testimonial'

import { testimonialFilterMap, testimonialSortMap } from '@/utils/constants'
import SelectField from '@/components/form/fields/SelectField'
import RadioFieldGroup from '@/components/form/fields/RadioFieldGroup'
import { TESTIMONIAL_SORT_VALUES } from '@/utils/constants'
import {
    StyledTestimonialGrid,
    StyledSortAndFilter
} from './StyledTestimonials'

const TestimonialWidget = () => {
    const { reviews } = useSelector((state: any) => state.testimonials)
    const [displaySort, setDisplaySort] = useState<string>('')
    const [displayFilter, setDisplayFilter] = useState<string>('SHOW_ALL')

    const handleDisplaySort = (sortType: string) => setDisplaySort(sortType)
    const handleDisplayFilter = (filterType: string) =>
        setDisplayFilter(filterType)
    const handleRenderReviews = () => {
        const filtered = testimonialFilterMap
            ?.get(displayFilter)
            ?.run([...reviews])
        const sorted = testimonialSortMap?.get(displaySort)?.run(filtered)
        return sorted
    }
    const displayReviews = useMemo(
        () => handleRenderReviews(),
        [displayFilter, displaySort, reviews]
    )

    return (
        <>
            <StyledSortAndFilter className="sort-&-filter">
                <RadioFieldGroup
                    displayFilter={displayFilter}
                    setDisplayFilter={setDisplayFilter}
                    handleDisplayFilter={handleDisplayFilter}
                />
                <SelectField
                    items={TESTIMONIAL_SORT_VALUES}
                    label="Sort by"
                    name="displaySort"
                    field={{ value: displaySort, error: '' }}
                    onChange={handleDisplaySort}
                />
            </StyledSortAndFilter>
            <StyledTestimonialGrid>
                {displayReviews?.map((data: TestimonialsProps) => (
                    <TestimonialCard field={data} key={data.id} />
                ))}
            </StyledTestimonialGrid>
        </>
    )
}

export default TestimonialWidget
