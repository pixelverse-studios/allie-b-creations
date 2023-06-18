import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import { TextField } from '@/components/form'
import useForm from '@/utils/hooks/useForm'
import { setServices } from '@/lib/redux/slices/services'
import FormValidations from '@/utils/validations/forms'
import { updateGeneralServiceData } from '@/lib/db/cms/services'
import { StyledServicesWidget } from './StyledServicesWidget'
import { StyledFieldSet } from '@/components/drawer/content/StyledFormComponents'

const initialState = {
    description: { value: [], error: '' },
    pageHeader: { value: '', error: '' }
}

const validations = {
    description: FormValidations.yolo,
    pageHeader: FormValidations.yolo
}

const ServicesWidget = () => {
    const dispatch = useDispatch()
    const { description, pageHeader, id } = useSelector(
        (state: any) => state.services
    )

    const {
        handleChange,
        form,
        handleImport,
        isDataImported,
        handleFormSubmit
    } = useForm(initialState, validations)

    const handleResetForm = () =>
        handleImport({
            description,
            pageHeader
        })

    useEffect(() => {
        if (id && !isDataImported) handleResetForm()
    }, [id])

    // add in logic to useForm to check if form can be submit. check against redux state vs current form
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
        <StyledServicesWidget
            onSubmit={(e: any) => handleFormSubmit(e, onFormSubmit)}>
            <h2>Services</h2>
            <div className="servicesCard">
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
                    <div className="button-group">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary">
                            Submit
                        </Button>
                        <Button
                            onClick={handleResetForm}
                            variant="contained"
                            color="error">
                            Reset
                        </Button>
                    </div>
                </StyledFieldSet>
            </div>
        </StyledServicesWidget>
    )
}

export default ServicesWidget
