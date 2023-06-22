import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel
} from '@mui/material'

import { TESTIMONIAL_FILTER_VALUES } from '@/utils/constants'
import { Dispatch, SetStateAction } from 'react'

const RadioFieldGroup = ({
    displayFilter,
    setDisplayFilter,
    handleDisplayFilter
}: {
    displayFilter: string
    setDisplayFilter: Dispatch<SetStateAction<string>>
    handleDisplayFilter: Function
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayFilter(event.target.value)
        return handleDisplayFilter(event.target.value)
    }
    return (
        <FormControl>
            <FormLabel id="radio-group-label">Filter By</FormLabel>
            <RadioGroup
                row
                aria-labelledby="radio-group-label"
                name="radio-button-group"
                onChange={handleChange}
                value={displayFilter}>
                {TESTIMONIAL_FILTER_VALUES.map(data => {
                    return (
                        <FormControlLabel
                            value={data.value}
                            control={<Radio />}
                            label={data.label}
                            key={data.value}
                        />
                    )
                })}
            </RadioGroup>
        </FormControl>
    )
}

export default RadioFieldGroup
