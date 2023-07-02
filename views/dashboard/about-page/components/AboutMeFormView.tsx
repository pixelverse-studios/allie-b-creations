import { FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '@/utils/hooks/useForm'
import FormValidations from '@/utils/validations/forms'
import { FormButtonGroup, TextField } from '@/components/form'
import { updateAboutPageData } from '@/lib/db/cms/about-page'
import { setAbout } from '@/lib/redux/slices/aboutPage'
import { StyledForm } from './StyledFormView'

const initialState = {
    name: { value: '', error: '' },
    description: { value: '', error: '' },
    header: { value: '', error: '' },
    subHeader: {
        value: '',
        error: ''
    },
    profileImg: {
        value: '',
        error: ''
    },
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
    profileImg: FormValidations.yolo,
    role: FormValidations.yolo,
    title: FormValidations.yolo
}

const AboutMeFormView = ({ FormData }: any) => {
    const dispatch = useDispatch()

    const {
        description,
        header,
        subHeader,
        profileImg,
        role,
        title,
        name,
        id
    } = FormData

    const {
        disableSubmit,
        form,
        formLoading,
        handleChange,
        handleFormSubmit,
        handleImport,
        isDataImported
    } = useForm(initialState, validations, FormData)

    const onFormSubmit = async () => {
        const payload = {
            ...(description !== form.description.value && {
                description: form.description.value
            }),
            ...(header !== form.header.value && { header: form.header.value }),
            ...(subHeader !== form.subHeader.value && {
                subHeader: form.subHeader.value
            }),
            ...(profileImg !== form.profileImg.value && {
                profileImg: form.profileImg.value
            }),
            ...(role !== form.role.value && { role: form.role.value }),
            ...(title !== form.title.value && { title: form.title.value }),
            ...(name !== form.name.value && { name: form.name.value })
        }

        const updatedAbout = await updateAboutPageData(id, payload)
        dispatch(setAbout(updatedAbout))
    }
    const handleResetForm = () =>
        handleImport({
            description,
            header,
            subHeader,
            profileImg,
            role,
            title,
            name
        })

    useEffect(() => {
        if (id && !isDataImported) handleResetForm()
    }, [id])

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
            <FormButtonGroup
                disableSubmit={disableSubmit}
                handleReset={handleResetForm}
                loading={formLoading}
            />
        </StyledForm>
    )
}

export default AboutMeFormView
