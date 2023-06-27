import { Dispatch, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { CircleIconButton } from '@/components/buttons'
import { Check, Close } from '@mui/icons-material'
import {
    FormControl,
    InputLabel,
    SelectChangeEvent,
    TextField
} from '@mui/material'
import IconSelectField from './IconSelectField'
import { updateContactLink } from '@/lib/db/cms/contact-links'
import { updateContactLinks } from '@/lib/redux/slices/contactLinks'
import { enqueueSnackbar } from 'notistack'
import bannerUtils from '@/utils/banners'

const { statuses, messages } = bannerUtils

const AddCancelForm = ({
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
    const [iconValue, setIconValue] = useState<string>('')
    const [linkValue, setLinkValue] = useState<string>('')

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
        <div className="link-card">
            <div className="card-header">
                <h5 style={{ color: 'red' }}>* Edit Mode *</h5>
                <div className="button-group">
                    <CircleIconButton onClickEvent={onEditModeConfirm}>
                        <Check />
                    </CircleIconButton>
                    <CircleIconButton onClickEvent={onEditModeCancel}>
                        <Close />
                    </CircleIconButton>
                </div>
            </div>
            <div className="input-group">
                <FormControl sx={{ width: 80 }}>
                    <InputLabel id="select-icon">Select</InputLabel>
                    <IconSelectField
                        icon={iconValue}
                        label="Select"
                        readOnly={false}
                        onSelectChange={onIconSelectChange}
                    />
                </FormControl>
                <FormControl sx={{ minWidth: 300 }}>
                    <TextField
                        label="Link"
                        value={linkValue}
                        onChange={onLinkChange}
                    />
                </FormControl>
            </div>
        </div>
    )
}

export default AddCancelForm
