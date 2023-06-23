import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    SelectChangeEvent
} from '@mui/material'

import {
    Close,
    Edit,
    Check,
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
import { enqueueSnackbar } from 'notistack'
import bannerUtils from '@/utils/banners'

import { updateContactLinks } from '@/lib/redux/slices/contactLinks'
import { updateContactLink } from '@/lib/db/cms/contact-links'
import { StyledContactLinkCard } from './StyledCards'
import { ConfirmDeleteButton, CircleIconButton } from '@/components/buttons'

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

const { statuses, messages } = bannerUtils

const ContactLinkCard = ({ field }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [iconValue, setIconValue] = useState<string>('')
    const [linkValue, setLinkValue] = useState<string>('')
    const { id, icon, label, link } = field

    //Functions for Delete Button
    const onDeleteContactLink = async () => {
        console.log('deleted')
    }

    //Functions for Edit Button
    const onEditModeChange = () => {
        setLinkValue(link)
        setIconValue(icon)
        setIsEditMode(!isEditMode)
    }
    const onEditModeConfirm = async () => {
        try {
            await updateContactLink({
                link: linkValue,
                icon: iconValue,
                id: id
            })
            dispatch(
                updateContactLinks({ link: linkValue, icon: iconValue, id: id })
            )
            setIsEditMode(false)
            enqueueSnackbar('Contact Link Updated', {
                variant: statuses.SUCCESS
            })
        } catch (error) {
            enqueueSnackbar(messages.TECHNICAL_DIFFICULTIES, {
                variant: statuses.ERROR
            })
        }
    }
    const onEditModeCancel = () => {
        setLinkValue(link)
        setIconValue(icon)
        setIsEditMode(false)
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
                <div className="card-header">
                    <h5
                        style={
                            !isEditMode
                                ? { color: 'transparent' }
                                : { color: 'red' }
                        }>
                        * Edit Mode *
                    </h5>
                    <div className="button-group">
                        {!isEditMode ? (
                            <>
                                <CircleIconButton
                                    onClickEvent={onEditModeChange}>
                                    <Edit />
                                </CircleIconButton>
                                <ConfirmDeleteButton
                                    onTriggerMutation={onDeleteContactLink}
                                />
                            </>
                        ) : (
                            <div className="button-group">
                                <CircleIconButton
                                    onClickEvent={onEditModeConfirm}>
                                    <Check />
                                </CircleIconButton>
                                <CircleIconButton
                                    onClickEvent={onEditModeCancel}>
                                    <Close />
                                </CircleIconButton>
                            </div>
                        )}
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
