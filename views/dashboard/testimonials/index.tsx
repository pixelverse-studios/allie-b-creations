import { TestimonialsProps } from '@/utils/types/redux'
import { useSelector } from 'react-redux'
import TestimonialCard from '@/components/dashboard/cards/testimonial'
import { StyledTestimonialGrid } from './StyledTestimonials'
import { Close } from '@mui/icons-material'

const TestimonialWidget = () => {
    const { reviews } = useSelector((state: any) => state.testimonials)
    const dummmyData = [
        {
            display: true,
            email: 'Kevin.LaCarrubba@yahoo.com',
            id: '23131313151hjida',
            name: 'Kevin LaCarrubba',
            rating: 4,
            review: 'Beautiful and Quality Work !'
        },
        {
            display: false,
            email: 'KLacarrubba.dev@gmail.com',
            id: '2313131315adfsdafs1hjida',
            name: 'DuCkiii3',
            rating: 2,
            review: 'All i wanted was a rubber duck that would float and somehow you sent a duck made out of balloons that sinks !'
        },
        {
            display: true,
            email: 'Kevin.LaC213arrubba@yahoo.com',
            id: '23131313151hj213aaida',
            name: 'Seth',
            rating: 5,
            review: 'Display Was beautiful !'
        },
        {
            display: false,
            email: 'KLacarrubba.dev@gmail.com',
            id: '2313131315ads1@22hjida',
            name: 'DuCkiii3',
            rating: 2,
            review: 'All i wanted was a rubber duck that would float and somehow you sent a duck made out of balloons that sinks !All i wanted was a rubber duck that would float and somehow you sent a duck made out of balloons that sinks !All i wanted was a rubber duck that would float and somehow you sent a duck made out of balloons that sinks !All i wanted was a rubber duck that would float and somehow you sent a duck made out of balloons that sinks !All i wanted was a rubber duck that would float and somehow you sent a duck made out of balloons that sinks !All i wanted was a rubber duck that would float and som'
        },
        {
            display: true,
            email: 'Kevin.LaCarrubba@yahoo.com',
            id: '2313131315asdfas1hjida',
            name: 'Kevin LaCarrubba',
            rating: 4,
            review: 'Beautiful and Quality Work !'
        },

        {
            display: true,
            email: 'Kevin.LaC213arrubba@yahoo.com',
            id: '23131313151hjaaida',
            name: 'Seth',
            rating: 5,
            review: 'Display Was beautiful !'
        }
    ]

    return (
        <>
            Display
            <StyledTestimonialGrid>
                {reviews.map((data: TestimonialsProps) => {
                    return (
                        <>
                            {data.display === true && (
                                <TestimonialCard field={data} />
                            )}
                        </>
                    )
                })}
            </StyledTestimonialGrid>
            Hidden
            <StyledTestimonialGrid>
                {reviews.map((data: TestimonialsProps) => {
                    return (
                        <>
                            {data.display === false && (
                                <TestimonialCard field={data} className="hey" />
                            )}
                        </>
                    )
                })}
            </StyledTestimonialGrid>
        </>
    )
}

export default TestimonialWidget
