import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import {
    InputLabel,
    FormControl,
    TextField,
    SelectChangeEvent
} from '@mui/material'

import { Close, Edit, Check } from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'
import bannerUtils from '@/utils/banners'

import {
    setContactLinks,
    updateContactLinks
} from '@/lib/redux/slices/contactLinks'
import {
    deleteContactLink,
    updateContactLink
} from '@/lib/db/cms/contact-links'
import { ConfirmDeleteButton, CircleIconButton } from '@/components/buttons'
import IconSelectField from '@/views/dashboard/footer/components/IconSelectField'
import { StyledContactLinkCard } from './StyledCard'

const { statuses, messages } = bannerUtils

const ContactLinkCard = ({ field }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [iconValue, setIconValue] = useState<string>('')
    const [linkValue, setLinkValue] = useState<string>('')
    const { id, icon, link } = field

    //Functions for Delete Button
    const onDeleteContactLink = async () => {
        try {
            const contactLinkData = await deleteContactLink(id)
            dispatch(setContactLinks(contactLinkData))
            enqueueSnackbar('Contact Link Deleted', {
                variant: statuses.SUCCESS
            })
        } catch (error) {
            enqueueSnackbar(messages.TECHNICAL_DIFFICULTIES, {
                variant: statuses.ERROR
            })
        }
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

    //Functions for event changes on select and text fields. Hi Philly
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
                            <>
                                <CircleIconButton
                                    onClickEvent={onEditModeConfirm}>
                                    <Check />
                                </CircleIconButton>
                                <CircleIconButton
                                    onClickEvent={onEditModeCancel}>
                                    <Close />
                                </CircleIconButton>
                            </>
                        )}
                    </div>
                </div>
                <div className="input-group">
                    <FormControl sx={{ minWidth: 80 }}>
                        <InputLabel id="select-icon">Select</InputLabel>
                        {!isEditMode ? (
                            <IconSelectField
                                icon={icon}
                                label="Select"
                                readOnly={true}
                            />
                        ) : (
                            <IconSelectField
                                icon={iconValue}
                                label="Select"
                                readOnly={false}
                                onSelectChange={onIconSelectChange}
                            />
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
