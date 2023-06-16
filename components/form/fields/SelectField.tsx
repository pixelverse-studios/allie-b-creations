import { Dispatch, SetStateAction } from 'react'
import {
    SelectChangeEvent,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@mui/material'
import { SELECT_ACTIONS } from '@/utils/constants'

const SelectField = ({
    displayFilter,
    setDisplayFilter
}: {
    displayFilter: string
    setDisplayFilter: Dispatch<SetStateAction<string>>
}) => {
    const MENU_ITEMS = Object.keys(SELECT_ACTIONS)

    const handleChange = (event: SelectChangeEvent) => {
        setDisplayFilter(event.target.value)
    }

    return (
        <FormControl variant="standard" sx={{ m: 1, maxWidth: 120 }}>
            <InputLabel id="select-field-label">Sort By</InputLabel>
            <Select
                labelId="select-field-label"
                id="select-field"
                onChange={handleChange}
                value={displayFilter}>
                {MENU_ITEMS.map((item: string) => {
                    return (
                        <MenuItem value={item} key={item}>
                            {item}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default SelectField
