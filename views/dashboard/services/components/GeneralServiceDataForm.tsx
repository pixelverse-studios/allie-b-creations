import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import useForm from '@/utils/hooks/useForm'
import { setServices } from '@/lib/redux/slices/services'
import FormValidations from '@/utils/validations/forms'
import { updateGeneralServiceData } from '@/lib/db/cms/services'
import { TextField, FormButtonGroup } from '@/components/form'
import { StyledFieldSet } from '@/components/drawer/content/StyledFormComponents'
import { StyledServicesBlock } from '../StyledServicesWidget'

const initialState = {
    description: { value: [], error: '' },
    pageHeader: { value: '', error: '' }
}

const validations = {
    description: FormValidations.yolo,
    pageHeader: FormValidations.yolo
}

const GeneralServiceDataForm = () => {
    const dispatch = useDispatch()
    const servicesStore = useSelector((state: any) => state.services)
    const { description, pageHeader, id } = servicesStore

    const {
        disableSubmit,
        handleChange,
        form,
        formLoading,
        handleImport,
        isDataImported,
        handleFormSubmit
    } = useForm(initialState, validations, servicesStore)

    const handleResetForm = () =>
        handleImport({
            description,
            pageHeader
        })

    useEffect(() => {
        if (id && !isDataImported) handleResetForm()
    }, [id])

    const onFormSubmit = async () => {
        const payload = {} as { description?: string; pageHeader?: string }
        if (description !== form.description.value)
            payload.description = form.description.value
        if (pageHeader !== form.pageHeader.value)
            payload.pageHeader = form.pageHeader.value

        const updatedServices = await updateGeneralServiceData(id, payload)
        dispatch(setServices(updatedServices))
    }
    return (
        <StyledServicesBlock
            onSubmit={(e: any) => handleFormSubmit(e, onFormSubmit)}>
            <h4>General Page Data</h4>
            <StyledFieldSet>
                <TextField
                    field={form.pageHeader}
                    id="pageHeader"
                    label="Page Header"
                    type="text"
                    onChange={handleChange}
                />
                <TextField
                    field={form.description}
                    id="description"
                    label="Page Description"
                    type="textarea"
                    onChange={handleChange}
                />
                <FormButtonGroup
                    disableSubmit={disableSubmit}
                    handleReset={handleResetForm}
                    loading={formLoading}
                />
            </StyledFieldSet>
        </StyledServicesBlock>
    )
}

export default GeneralServiceDataForm
