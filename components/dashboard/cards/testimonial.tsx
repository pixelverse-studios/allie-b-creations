import { StyledTestimonialCard } from './StyledCards'
const TestimonialCard = ({ field }: any) => {
    const { display, email, id, name, rating, review } = field
    console.log('display :>> ', display)
    console.log('email :>> ', email)
    console.log('id :>> ', id)
    console.log('name :>> ', name)
    console.log('rating :>> ', rating)
    console.log('review :>> ', review)
    return (
        <StyledTestimonialCard>
            <h3>{name}</h3>
            <span>{rating}/5</span>
            <span>{review}</span>
        </StyledTestimonialCard>
    )
}

export default TestimonialCard
