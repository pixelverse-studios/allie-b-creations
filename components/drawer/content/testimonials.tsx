import { TextField } from '@/components/form'

const formFields = [
    {
        label: 'Name'
    },
    {
        label: 'Email'
    },
    {
        label: 'Rating'
    },
    {
        label: 'Review'
    }
]
const TestimonialForm = () => {
    return (
        <>
            {formFields.map(data => (
                <TextField />
            ))}
        </>
    )
}

export default TestimonialForm
