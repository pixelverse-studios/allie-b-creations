import { Rating as MuiRatingField, Typography } from '@mui/material'

type RatingFieldProps = {
    name: string
    field: any
    onChange: any
}

const RatingField = ({ name, field, onChange }: RatingFieldProps) => {
    const parseValue = parseInt(field.value)
    return (
        <div>
            <Typography>{name}</Typography>
            <MuiRatingField
                name={name}
                value={parseValue}
                onChange={onChange}
            />
        </div>
    )
}

export default RatingField
