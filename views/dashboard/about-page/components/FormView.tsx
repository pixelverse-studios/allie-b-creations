import { use, useEffect } from 'react'
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
    img: [
        {
            name: '',
            src: '',
            title: '',
            type: ''
        }
    ],
    role: {
        value: '',
        error: ''
    },
    title: {
        value: '',
        error: ''
    }
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

const FormView = ({ FormData }: any) => {
    const dispatch = useDispatch()

    const { description, header, subHeader, img, role, title, name, id } =
        FormData

    const {
        disableSubmit,
        form,
        formLoading,
        handleChange,
        handleFormSubmit,
        handleNonFormEventChange,
        handleImport,
        isDataImported
    } = useForm(initialState, validations, FormData)

    const onFormSubmit = async () => {
        try {
            const cloudImg = await handleCloudUpload({
                base64: form.img.value[0].base64,
                context: 'aboutPage',
                filename: form.img.value[0].name
            })

            const payload = {
                ...(description !== form.description.value && {
                    description: form.description.value
                }),
                ...(header !== form.header.value && {
                    header: form.header.value
                }),
                ...(subHeader !== form.subHeader.value && {
                    subHeader: form.subHeader.value
                }),
                ...(role !== form.role.value && { role: form.role.value }),
                ...(title !== form.title.value && { title: form.title.value }),
                ...(name !== form.name.value && { name: form.name.value }),
                ...(img !== form.img.value && {
                    src: cloudImg,
                    type: form.img.value[0].type,
                    name: form.img.value[0].name
                })
            }

            const updatedAbout = await updateAboutPageData(id, payload)
            dispatch(setAbout(updatedAbout))
            enqueueSnackbar('Your About Me pagehas been updated.', {
                variant: statuses.SUCCESS
            })
        } catch (error: any) {
            enqueueSnackbar(
                error.message === 'You about page update failed.'
                    ? error.message
                    : messages.TECHNICAL_DIFFICULTIES,
                {
                    variant: statuses.ERROR
                }
            )
        }
    }
    const handleResetForm = () =>
        handleImport({
            description,
            header,
            subHeader,
            img,
            role,
            title,
            name
        })

    useEffect(() => {
        if (id && !isDataImported) handleResetForm()
    }, [id])
    useEffect(() => {
        handleResetForm()
    }, [FormData])

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
                    <h6>Current Image</h6>
                    <img
                        src={form.img?.value?.src || form.img?.value?.[0]?.src}
                        alt="uploaded image"
                        className="uploaded-image"
                    />
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
