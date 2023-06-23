import {
    Email,
    MailOutline,
    Send,
    Facebook,
    FacebookOutlined,
    Instagram,
    Pinterest,
    Twitter,
    Reddit,
    YouTube
} from '@mui/icons-material'
import { InputLabel, MenuItem, Select } from '@mui/material'

const SocialMenuItems = [
    {
        icon: <Send />,
        value: 'Send'
    },
    {
        icon: <Email />,
        value: 'Email'
    },
    {
        icon: <MailOutline />,
        value: 'Email Outline'
    },
    {
        icon: <Facebook />,
        value: 'Facebook'
    },
    {
        icon: <FacebookOutlined />,
        value: 'FacebookOutlined'
    },
    {
        icon: <Instagram />,
        value: 'Instagram'
    },
    {
        icon: <Pinterest />,
        value: 'Pinterest'
    },
    {
        icon: <Twitter />,
        value: 'Twitter'
    },
    {
        icon: <Reddit />,
        value: 'Reddit'
    },
    {
        icon: <YouTube />,
        value: 'YouTube'
    }
]

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
