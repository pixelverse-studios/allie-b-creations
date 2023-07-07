import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { FileUpload, FormButtonGroup, TextField } from '@/components/form'
import { updateHomePage } from '@/lib/db/cms/home-page'
import { setHomePage } from '@/lib/redux/slices/homePage'
import { handleCloudUpload } from '@/utils/fileConversions'
import { enqueueSnackbar } from 'notistack'
import { statuses, messages } from '@/utils/banners'

import { StyledHeroForm } from './StyledHeroForm'

const initialState = {
    heroBanner: {
        value: '',
        error: ''
    },
    img: { value: [], error: '' }
}

interface Payload {
    [key: string]: any
}

const validations = {
    heroBanner: FormValidations.yolo,
    img: FormValidations.yolo
}

const HeroForm = ({ store }: any) => {
    const dispatch = useDispatch()

    const { id, heroBanner, img } = store

    const {
        disableSubmit,
        form,
        formLoading,
        handleChange,
        handleFormSubmit,
        handleNonFormEventChange,
        handleImport
    } = useForm(initialState, validations, store)

    const onFormSubmit = async () => {
        try {
            const payload: Payload = {}
            for (const [key] of Object.entries(store)) {
                if (form[key] && store[key] !== form[key].value) {
                    if (key === 'img') {
                        payload[key] = {
                            src: await handleCloudUpload({
                                base64: form.img.value[0].base64,
                                context: 'aboutPage',
                                filename: form.img.value[0].name
                            }),
                            type: form.img.value[0].type,
                            name: form.img.value[0].name
                        }
                    } else {
                        payload[key] = form[key].value
                    }
                }
            }

            const updatedAbout = await updateHomePage(id, payload)
            dispatch(setHomePage(updatedAbout))
            enqueueSnackbar('Your home page has been updated', {
                variant: statuses.SUCCESS
            })
        } catch (error: any) {
            enqueueSnackbar(
                error.message === 'Your home page update has failed.'
                    ? error.message
                    : messages.TECHNICAL_DIFFICULTIES,
                {
                    variant: statuses.ERROR
                }
            )
        }
    }

    const handleImportache = () =>
        handleImport({
            heroBanner,
            img
        })

    const handleResetForm = () => handleImportache()

    useEffect(() => {
        if (id) handleImportache()
    }, [id, store])

    const onFilesChange = (files: any) => {
        handleNonFormEventChange(files, 'img')
    }

    return (
        <StyledHeroForm
            onSubmit={(e: any) => handleFormSubmit(e, onFormSubmit)}>
            <TextField
                field={form.heroBanner}
                id="heroBanner"
                label="Banner"
                type="text"
                onChange={handleChange}
            />
            <div className="image-upload">
                <div className="current-image">
                    {form?.img?.value?.src || form?.img?.value?.[0]?.src ? (
                        <>
                            <h6>Current Image</h6>
                            <img
                                src={
                                    form?.img?.value?.src ||
                                    form?.img?.value?.[0]?.src
                                }
                                alt="uploaded image"
                                className="uploaded-image"
                            />
                        </>
                    ) : (
                        <h6>Image Not Available</h6>
                    )}
                </div>
                <div className="file-upload">
                    <FileUpload
                        context="homePage"
                        multiple={false}
                        files={
                            Array.isArray(form?.img?.value)
                                ? form?.img?.value
                                : [form?.img?.value]
                        }
                        setFiles={onFilesChange}
                        label="Upload image"
                    />
                </div>
            </div>
            <FormButtonGroup
                disableSubmit={disableSubmit}
                handleReset={handleResetForm}
                loading={formLoading}
            />
        </StyledHeroForm>
    )
}

export default HeroForm
