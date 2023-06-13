import {
    Rating as MuiRatingField,
    Typography,
    FormHelperText,
    FormControl
} from '@mui/material'
import { setColor } from '../utilities'

type RatingFieldProps = {
    name: string
    field: { value: string; error: string }
    onChange: any
    id: string
    label: string
    submitError: boolean
}

const RatingField = ({
    name,
    field,
    onChange,
    id,
    label,
    submitError
}: RatingFieldProps) => {
    const parseValue = parseInt(field.value)
    return (
        <FormControl color={setColor(field)} error={Boolean(field.error)}>
            <Typography>{label}</Typography>
            <MuiRatingField
                id={id}
                name={name}
                value={parseValue}
                onChange={onChange}
            />
            <>
                {parseValue === 0 && !submitError && (
                    <FormHelperText>
                        Please rate your experience with Allie B Creations
                    </FormHelperText>
                )}
            </>
            <>
                {submitError && (
                    <FormHelperText id={id} error>
                        You must select a rating.
                    </FormHelperText>
                )}
            </>
        </FormControl>
    )
}

export default RatingField
