import { Button } from '@mui/material'
import { StyledFormButtonGroup } from './StyledFormButtonGroup'

interface FormButtonGroupProps {
    disableSubmit: boolean
    handleReset: any
    loading: boolean
}

const FormButtonGroup = ({
    disableSubmit,
    handleReset,
    loading
}: FormButtonGroupProps) => {
    return (
        <StyledFormButtonGroup>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={disableSubmit}>
                Submit
            </Button>
            <Button onClick={handleReset} variant="contained" color="error">
                Reset
            </Button>
        </StyledFormButtonGroup>
    )
}

export default FormButtonGroup
