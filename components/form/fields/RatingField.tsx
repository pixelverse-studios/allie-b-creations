import { Rating as MuiRatingField, Typography } from '@mui/material'

type RatingFieldProps = {
    name: string
    value: number
}

const RatingField = ({ name, value }: RatingFieldProps) => {
    return (
        <div>
            <Typography>{name}</Typography>
            <MuiRatingField name={name} value={value} />
        </div>
    )
}

export default RatingField
