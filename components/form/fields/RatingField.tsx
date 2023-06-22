import {
    Rating as MuiRatingField,
    Typography,
    FormControl
} from '@mui/material'
import { setColor } from '../utilities'

type RatingFieldProps = {
    name: string
    field: { value: string; error: string }
    onChange: any
    id: string
    label: string
}

const RatingField = ({
    name,
    field,
    onChange,
    id,
    label
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
        </FormControl>
    )
}

export default RatingField
