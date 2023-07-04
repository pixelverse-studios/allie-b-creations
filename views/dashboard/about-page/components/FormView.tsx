import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { FileUpload, FormButtonGroup, TextField } from '@/components/form'
import { updateAboutPageData } from '@/lib/db/cms/about-page'
import { setAbout } from '@/lib/redux/slices/aboutPage'
import { StyledForm } from './StyledFormView'
import { handleCloudUpload } from '@/utils/fileConversions'
import { enqueueSnackbar } from 'notistack'
import { statuses, messages } from '@/utils/banners'

const initialState = {
    name: { value: '', error: '' },
    description: { value: '', error: '' },
    header: { value: '', error: '' },
    subHeader: {
        value: '',
        error: ''
    },
    img: { value: [], error: '' },

    role: {
        value: '',
        error: ''
    },
    title: {
        value: '',
        error: ''
    }
}

interface Payload {
    [key: string]: any
}

const validations = {
    name: FormValidations.yolo,
    description: FormValidations.yolo,
    header: FormValidations.yolo,
    subHeader: FormValidations.yolo,
    img: FormValidations.yolo,
    role: FormValidations.yolo,
    title: FormValidations.yolo
}

const FormView = ({ store }: any) => {
    const dispatch = useDispatch()

    const { description, header, subHeader, img, role, title, name, id } = store

    const {
        disableSubmit,
        form,
        formLoading,
        handleChange,
        handleFormSubmit,
        handleNonFormEventChange,
        handleImport,
        isDataImported
    } = useForm(initialState, validations, store)

    const onFormSubmit = async () => {
        if (!store || !form) return

        try {
            const payload: Payload = {}
            for (const [key] of Object.entries(form)) {
                if (form[key] !== store[key].value) {
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

            const updatedAbout = await updateAboutPageData(id, payload)
            dispatch(setAbout(updatedAbout))
            enqueueSnackbar('Your About Me page has been updated.', {
                variant: statuses.SUCCESS
            })
        } catch (error: any) {
            enqueueSnackbar(
                error.message === 'Your about page update failed.'
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
            description,
            header,
            subHeader,
            img,
            role,
            title,
            name
        })

    const handleResetForm = () => handleImportache()

    useEffect(() => {
        if (id && !isDataImported) handleImportache()
    }, [store])

    useEffect(() => {
        handleImportache()
    }, [store])

    const onFilesChange = (files: any) => {
        handleNonFormEventChange(files, 'img')
    }

    return (
        <StyledForm onSubmit={(e: any) => handleFormSubmit(e, onFormSubmit)}>
            <TextField
                field={form.header}
                id="header"
                label="Header"
                type="text"
                onChange={handleChange}
            />
            <TextField
                field={form.subHeader}
                id="subHeader"
                label="Sub Header"
                type="text"
                onChange={handleChange}
            />
            <TextField
                field={form.description}
                id="description"
                label="Description"
                type="textarea"
                onChange={handleChange}
            />
            <TextField
                field={form.name}
                id="name"
                label="Name"
                type="text"
                onChange={handleChange}
            />
            <TextField
                field={form.role}
                id="role"
                label="Role"
                type="text"
                onChange={handleChange}
            />
            <div className="image-upload">
                <div className="current-image">
                    {form.img?.value?.src || form.img?.value?.[0]?.src ? (
                        <>
                            <h6>Current Image</h6>
                            <img
                                src={
                                    form.img?.value?.src ||
                                    form.img?.value?.[0]?.src
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
                        context="aboutPage"
                        multiple={false}
                        files={
                            Array.isArray(form.img.value)
                                ? form.img.value
                                : [form.img.value]
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
        </StyledForm>
    )
}

export default FormView
