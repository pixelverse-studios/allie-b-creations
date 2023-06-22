import { useState } from 'react'
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    SelectChangeEvent
} from '@mui/material'
import { Close, Edit, Pin } from '@mui/icons-material'

import { StyledContactLinkCard } from './StyledCards'

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

const ContactLinkCard = ({ field }: any) => {
    const [deleteFocus, setDeleteFocus] = useState<number>(0)

    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [iconValue, setIconValue] = useState<string>('')
    const [linkValue, setLinkValue] = useState<string>('')
    const { id, icon, label, link } = field

    //Functions for Delete Button
    const onDeleteContactLink = async () => {
        const CONFIRMED_CLICK = 2
        try {
            if (deleteFocus === CONFIRMED_CLICK) {
                console.log('deleted')
                setDeleteFocus(0)
            } else {
                setDeleteFocus(deleteFocus + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const onDeleteFocus = () => setDeleteFocus(1)
    const onDeleteBlur = () => setDeleteFocus(0)

    //Functions for Edit Button
    const onEditModeChange = () => {
        setLinkValue(link)
        setIconValue(icon)
        setIsEditMode(!isEditMode)
    }

    const onIconSelectChange = (event: SelectChangeEvent) => {
        setIconValue(event.target.value as string)
    }
    const onLinkChange = (event: { target: { value: string } }) => {
        setLinkValue(event.target.value)
    }
    return (
        <StyledContactLinkCard>
            <div className="link-card">
                <div className="button-group">
                    <h6
                        style={
                            !isEditMode
                                ? { color: 'transparent' }
                                : { color: 'green' }
                        }>
                        * Edit Mode *
                    </h6>
                    <div>
                        <button
                            className="edit-button"
                            onClick={onEditModeChange}>
                            <Edit />
                        </button>
                        <button
                            onClick={onDeleteContactLink}
                            onFocus={onDeleteFocus}
                            onBlur={onDeleteBlur}
                            className="delete-button">
                            <span>Confirm Delete</span>
                            <Close />
                        </button>
                    </div>
                </div>
                <div className="input-group">
                    <FormControl sx={{ minWidth: 80 }}>
                        <InputLabel id="select-icon">Select</InputLabel>
                        {!isEditMode ? (
                            <Select
                                labelId="select-icon"
                                label="Select"
                                value={icon}
                                inputProps={{ readOnly: true }}>
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
                        ) : (
                            <Select
                                labelId="select-icon"
                                label="Select"
                                value={iconValue}
                                onChange={onIconSelectChange}>
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
                        )}
                    </FormControl>
                    <FormControl sx={{ minWidth: 300 }}>
                        {!isEditMode ? (
                            <TextField
                                label="Link"
                                inputProps={{ readOnly: true }}
                                value={link}
                            />
                        ) : (
                            <TextField
                                label="Link"
                                value={linkValue}
                                onChange={onLinkChange}
                            />
                        )}
                    </FormControl>
                </div>
            </div>
        </StyledContactLinkCard>
    )
}

export default ContactLinkCard
