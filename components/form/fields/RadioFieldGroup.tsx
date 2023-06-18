import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel
} from '@mui/material'

import { RADIO_GROUP_VALUES } from '@/utils/constants'

const RadioFieldGroup = ({
    displayFilter,
    handleDisplayFilter
}: {
    displayFilter: string
    handleDisplayFilter: Function
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return handleDisplayFilter(event.target.value)
    }
    return (
        <FormControl>
            <FormLabel id="radio-group-label">Filter By</FormLabel>
            <RadioGroup
                aria-labelledby="radio-group-label"
                name="radio-button-group"
                onChange={handleChange}
                value={displayFilter}>
                {RADIO_GROUP_VALUES.map(data => {
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
