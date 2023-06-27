import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/redux/store'

import { FormControl, SelectChangeEvent, TextField } from '@mui/material'
import { enqueueSnackbar } from 'notistack'

import { Add } from '@mui/icons-material'
import ContactLinkCard from '@/views/dashboard/footer/components/contactLink'
import IconSelectField from '@/views/dashboard/footer/components/IconSelectField'
import { CircleIconButton } from '@/components/buttons'
import bannerUtils from '@/utils/banners'
import { createContactLink } from '@/lib/db/cms/contact-links'
import { StyledFooterWedgie, StyledSubmissionForm } from './StyledFooterWidget'
import { setContactLinks } from '@/lib/redux/slices/contactLinks'

const { statuses, messages } = bannerUtils
const FooterWidget = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [linkValue, setLinkValue] = useState<string>('')
    const [iconValue, setIconValue] = useState<string>('')
    const contactLinks = useSelector((state: any) => state.contactLinks)

    const onLinkChange = (event: { target: { value: string } }) => {
        setLinkValue(event.target.value)
    }

    const onIconSelectChange = (event: SelectChangeEvent) => {
        setIconValue(event.target.value as string)
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
                    <FormControl sx={{ minWidth: 300 }}>
                        <TextField
                            label="Link"
                            value={linkValue}
                            onChange={onLinkChange}
                        />
                    </FormControl>
                    <CircleIconButton
                        onClickEvent={onSubmitNewContactLink}
                        Icon={<Add />}
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
