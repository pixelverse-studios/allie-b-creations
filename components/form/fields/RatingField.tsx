import {
    Rating as MuiRatingField,
    Typography,
    FormHelperText
} from '@mui/material'

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
        <div>
            <Typography>{label}</Typography>
            <MuiRatingField
                id={id}
                name={name}
                value={parseValue}
                onChange={onChange}
            />
            <>
                {parseValue === 0 && (
                    <FormHelperText>Please select a rating.</FormHelperText>
                )}
            </>
            <FormHelperText id={id}>{field.error}</FormHelperText>
        </div>
    )
}

export default RatingField
