import { StyledTestimonialCard } from './StyledCards'
const TestimonialCard = ({ field }: any) => {
    const { display, email, id, name, rating, review } = field

    return (
        <StyledTestimonialCard>
            <h3>{name}</h3>
            <span>{rating}/5</span>
            <span>{review}</span>
        </StyledTestimonialCard>
    )
}

export default TestimonialCard
