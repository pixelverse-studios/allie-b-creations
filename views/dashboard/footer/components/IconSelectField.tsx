import { InputLabel, MenuItem, Select } from '@mui/material'
import { SocialMenuItems } from '@/utils/IconSelection'

const IconSelectField = ({
    icon,
    label,
    onSelectChange,
    readOnly
}: {
    icon: string
    label: string
    onSelectChange?: any
    readOnly: boolean
}) => {
    return (
        <>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                labelId={label}
                label={label}
                value={icon}
                inputProps={{ readOnly: readOnly }}
                onChange={onSelectChange}>
                {SocialMenuItems.map(data => {
                    return (
                        <MenuItem
                            value={data.value}
                            key={data.value}
                            className="menu-item">
                            {data.icon}
                        </MenuItem>
                    )
                })}
            </Select>
        </>
    )
}

export default IconSelectField
