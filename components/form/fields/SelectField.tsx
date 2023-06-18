import { Dispatch, SetStateAction } from 'react'
import {
    SelectChangeEvent,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@mui/material'
import { SELECT_FIELD_VALUES } from '@/utils/constants'

const SelectField = ({
    displaySort,
    setDisplaySort
}: {
    displaySort: string
    setDisplaySort: Dispatch<SetStateAction<string>>
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        setDisplaySort(event.target.value)
    }

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="select-field-label">Sort By</InputLabel>
            <Select
                labelId="select-field-label"
                id="select-field"
                onChange={handleChange}
                value={displaySort}>
                {SELECT_FIELD_VALUES.map(item => {
                    return (
                        <MenuItem value={item.value} key={item.value}>
                            {item.label}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default SelectField
