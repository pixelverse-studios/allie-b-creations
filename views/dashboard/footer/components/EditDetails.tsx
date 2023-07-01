import { Dispatch, SetStateAction, useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'
import { CircleIconButton } from '@/components/buttons'
import { Check, Close } from '@mui/icons-material'
import {
    FormControl,
    FormHelperText,
    InputLabel,
    TextField
} from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import IconSelectField from './IconSelectField'
import { updateContactLink } from '@/lib/db/cms/contact-links'
import { updateContactLinks } from '@/lib/redux/slices/contactLinks'
import FormValidations from '@/utils/validations/forms'
import bannerUtils from '@/utils/banners'

const { statuses, messages } = bannerUtils

const { validWebUrl, validEmail } = FormValidations

const EMAIL = 'Email'

const EditDetails = ({
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
    const [hasError, setHasError] = useState<boolean>(false)

    useEffect(() => {
        setLinkValue(link)
        setIconValue(icon)
    }, [setLinkValue, setIconValue])

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

    const validateForm = (icon: string, link: string) => {
        const errorValue = icon.includes(EMAIL)
            ? validEmail.test(link)
            : validWebUrl.test(link)

        setHasError(!errorValue)
    }

    const onIconSelectChange = ({
        target: { value }
    }: {
        target: { value: string }
    }) => {
        setIconValue(value)
        validateForm(value, linkValue)
    }

    const onLinkChange = ({
        target: { value }
    }: {
        target: { value: string }
    }) => {
        setLinkValue(value)
        validateForm(iconValue, value)
    }

    const disableCheck = useMemo(
        () => (iconValue === icon && link === linkValue) || hasError,
        [iconValue, icon, link, linkValue, hasError]
    )

    return (
        <div className="link-card">
            <div className="card-header">
                <h5 style={{ color: 'red' }}>* Edit Mode *</h5>
                <div className="button-group">
                    <CircleIconButton
                        onClickEvent={onEditModeConfirm}
                        Icon={<Check />}
                        disabled={disableCheck}
                    />
                    <CircleIconButton
                        onClickEvent={onEditModeCancel}
                        Icon={<Close />}
                    />
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
                        error={hasError}
                        id={id}
                    />
                    {hasError && (
                        <FormHelperText id={id} error className="error-text">
                            {iconValue.includes(EMAIL)
                                ? `Must containt a valid email address (example@test.com)`
                                : `  The URL must have the following format:
                            https://www.website.com.`}
                        </FormHelperText>
                    )}
                </FormControl>
            </div>
        </div>
    )
}

export default EditDetails
