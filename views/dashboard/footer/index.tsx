import { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'

import {
    FormControl,
    FormHelperText,
    SelectChangeEvent,
    TextField
} from '@mui/material'
import { enqueueSnackbar } from 'notistack'

import { Add } from '@mui/icons-material'
import ContactLinkCard from '@/views/dashboard/footer/components/contactLink'
import IconSelectField from '@/views/dashboard/footer/components/IconSelectField'
import { CircleIconButton } from '@/components/buttons'
import bannerUtils from '@/utils/banners'
import { createContactLink } from '@/lib/db/cms/contact-links'
import { StyledFooterWedgie, StyledSubmissionForm } from './StyledFooterWidget'
import FormValidations from '@/utils/validations/forms'
import { setContactLinks } from '@/lib/redux/slices/contactLinks'

const { statuses } = bannerUtils

interface ContactLink {
    icon: string
    label: string
    link: string
}

const { validHttpOrHttpsUrl, validEmail } = FormValidations

const EMAIL = 'Email'

const FooterWidget = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [linkValue, setLinkValue] = useState<string>('')
    const [iconValue, setIconValue] = useState<string>('')
    const [hasError, setHasError] = useState<boolean>(false)
    const contactLinks = useSelector(
        (state: { contactLinks: ContactLink[] }) => state.contactLinks
    )

    const validateForm = (icon: string, link: string) => {
        const errorValue = icon.includes(EMAIL)
            ? validEmail.test(link)
            : validHttpOrHttpsUrl.test(link)

        setHasError(!errorValue)
    }

    const onLinkChange = ({
        target: { value }
    }: {
        target: { value: string }
    }) => {
        setLinkValue(value)
        validateForm(iconValue, value)
    }

    const onIconSelectChange = ({
        target: { value }
    }: {
        target: { value: string }
    }) => {
        setIconValue(value)
        validateForm(value, linkValue)
    }

    const onSubmitNewContactLink = async (event: any) => {
        event?.preventDefault()
        try {
            const payload = {
                icon: iconValue,
                label: iconValue,
                link: linkValue
            }
            const freshContactLinks = await createContactLink(payload)
            dispatch(setContactLinks(freshContactLinks))
            setLinkValue('')
            setIconValue('')
            enqueueSnackbar('Contact Link Created', {
                variant: statuses.SUCCESS
            })
        } catch (error) {
            enqueueSnackbar(
                'There was an issue creating your contact link. Hit up your boiis to fix it.',
                {
                    variant: statuses.ERROR
                }
            )
        }
    }

    const disableCheck = useMemo(
        () => (iconValue.length === 0 && linkValue.length === 0) || hasError,
        [iconValue, linkValue, hasError]
    )

    return (
        <StyledFooterWedgie>
            <h1>Contact Links</h1>
            <StyledSubmissionForm>
                <h4>Create New Contact Link</h4>
                <div className="form-group">
                    <FormControl sx={{ minWidth: 180 }} className="field-group">
                        <IconSelectField
                            icon={iconValue}
                            label={'Select'}
                            readOnly={false}
                            onSelectChange={onIconSelectChange}
                        />
                    </FormControl>
                    <div>
                        <FormControl sx={{ minWidth: 300 }}>
                            <TextField
                                label="Link"
                                value={linkValue}
                                onChange={onLinkChange}
                                error={hasError}
                                id="Link"
                            />
                            {hasError && (
                                <FormHelperText
                                    error
                                    className="error-text"
                                    id="Link">
                                    {iconValue.includes(EMAIL)
                                        ? `Must containt a valid email address (example@test.com)`
                                        : `  The URL must have the following format:
                                    https://www.website.com.`}
                                </FormHelperText>
                            )}
                        </FormControl>
                    </div>
                    <CircleIconButton
                        onClickEvent={onSubmitNewContactLink}
                        Icon={<Add />}
                        disabled={disableCheck}
                    />
                </div>
            </StyledSubmissionForm>
            <div className="footer-grid">
                {contactLinks.map((data: any) => {
                    return <ContactLinkCard field={data} key={data.label} />
                })}
            </div>
        </StyledFooterWedgie>
    )
}

export default FooterWidget
