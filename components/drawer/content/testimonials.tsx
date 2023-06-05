import { TextField, RatingField } from '@/components/form'
import { StyledForm } from './StyledForm'
import { Button } from '@mui/material'

const TestimonialForm = () => {
    return (
        <StyledForm>
            <div className="form-fields">
                <TextField label="Name" type="text" />
                <TextField label="Email" type="email" />
                <RatingField name="Rating" value={2} />
                <TextField label="Review" type="textarea" />
            </div>
            <div className="button-group">
                <Button variant="outlined">Submit</Button>
                <Button variant="outlined">Reset</Button>
            </div>
        </StyledForm>
    )
}

export default TestimonialForm
