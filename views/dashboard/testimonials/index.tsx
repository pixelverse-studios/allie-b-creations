import { TestimonialsProps } from '@/utils/types/redux'
import { useSelector } from 'react-redux'
import TestimonialCard from '@/components/dashboard/cards/testimonial'
import { StyledTestimonialPage } from './StyledTestimonials'

const TestimonialWidget = () => {
    const { reviews } = useSelector((state: any) => state.testimonials)

    return (
        <StyledTestimonialPage>
            {reviews.map((data: TestimonialsProps) => {
                return (
                    <>
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                        <TestimonialCard field={data} />
                    </>
                )
            })}
        </StyledTestimonialPage>
    )
}

export default TestimonialWidget
