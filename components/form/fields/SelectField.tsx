import {
    SelectChangeEvent,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@mui/material'
import { uniqueId } from 'lodash'

const SelectField = ({
    field,
    items,
    label,
    name,
    onChange
}: {
    field: { value: any; error: string }
    items: { label: string; value: any }[]
    label: string
    name: string
    onChange: Function
}) => {
    const handleChange = (event: SelectChangeEvent) =>
        onChange(event.target.value, event.target.name)

    return (
        <FormControl variant="outlined" className="selectField">
            <InputLabel id={name}>{label}</InputLabel>
            <Select
                labelId={name}
                id={name + 'id'}
                name={name}
                onChange={handleChange}
                value={field.value}>
                {items.map(item => {
                    return (
                        <MenuItem key={uniqueId()} value={item.value}>
                            {item.label}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default SelectField
