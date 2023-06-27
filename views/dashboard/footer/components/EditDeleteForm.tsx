import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { CircleIconButton, ConfirmDeleteButton } from '@/components/buttons'
import { Edit } from '@mui/icons-material'
import { FormControl, InputLabel, TextField } from '@mui/material'
import IconSelectField from './IconSelectField'
import { deleteContactLink } from '@/lib/db/cms/contact-links'
import { setContactLinks } from '@/lib/redux/slices/contactLinks'
import { enqueueSnackbar } from 'notistack'
import bannerUtils from '@/utils/banners'

const { statuses, messages } = bannerUtils
const EditDeleteForm = ({
    setIsEditMode,
    id,
    icon,
    link
}: {
    setIsEditMode: Dispatch<SetStateAction<boolean>>
    id: string
    icon: string
    link: string
}) => {
    const dispatch = useDispatch<AppDispatch>()

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

    const onEditModeChange = () => {
        setIsEditMode(true)
    }
    return (
        <div className="link-card">
            <div className="card-header">
                <h5 style={{ color: 'transparent' }}>* Edit Mode *</h5>
                <div className="button-group">
                    <CircleIconButton
                        onClickEvent={onEditModeChange}
                        Icon={<Edit />}
                    />

                    <ConfirmDeleteButton
                        onTriggerMutation={onDeleteContactLink}
                    />
                </div>
            </div>
            <div className="input-group">
                <FormControl sx={{ width: 80 }}>
                    <InputLabel id="select-icon">Select</InputLabel>
                    <IconSelectField
                        icon={icon}
                        label="Select"
                        readOnly={true}
                    />
                </FormControl>
                <FormControl sx={{ minWidth: 300 }}>
                    <TextField
                        label="Link"
                        inputProps={{ readOnly: true }}
                        value={link}
                    />
                </FormControl>
            </div>
        </div>
    )
}

export default EditDeleteForm
