import { useSelector, useDispatch } from 'react-redux'
import { Card, Typography } from '@mui/material'
import useForm from '@/utils/hooks/useForm'
import { addNewOfferingSection } from '@/lib/db/cms/services'
import OfferingCard from './OfferingCard'
import FormValidations from '@/utils/validations/forms'
import { StyledFieldSet } from '@/components/drawer/content/StyledFormComponents'
import {
    StyledServicesBlock,
    StyledEventTypeCard
} from '../../StyledServicesWidget'
import { TextField, FormButtonGroup } from '@/components/form'
import { uniqueId } from 'lodash'
import { setServices } from '@/lib/redux/slices/services'

const initialState = { newSection: { value: '', error: '' } }
const validations = { newSection: FormValidations.yolo }

const ServiceOfferingsForm = () => {
    const dispatch = useDispatch()
    const servicesStore = useSelector((state: any) => state.services)
    const { offerings, id } = servicesStore

    const {
        disableSubmit,
        form,
        formLoading,
        handleChange,
        handleFormSubmit,
        handleReset
    } = useForm(initialState, validations, { newSection: '' })

    const onSubmit = async () => {
        const updatedOfferings = [
            ...offerings,
            { section: form.newSection.value, events: [] }
        ]
        const refreshedServices = await addNewOfferingSection(
            id,
            updatedOfferings
        )
        dispatch(setServices(refreshedServices))
        handleReset()
    }

    return (
        <StyledServicesBlock>
            <h4>Offering Sections</h4>
            <div className="offeringSections">
                <div className="offeringSections">
                    {offerings.map((offering: any) => (
                        <OfferingCard
                            key={uniqueId()}
                            section={offering.section}
                            events={offering.events}
                        />
                    ))}
                    <Card>
                        <StyledEventTypeCard className="newOfferingCard">
                            <Typography variant="h6" gutterBottom>
                                Add a new event section
                            </Typography>
                            <form onSubmit={e => handleFormSubmit(e, onSubmit)}>
                                <StyledFieldSet>
                                    <TextField
                                        field={form.newSection}
                                        id="newSection"
                                        label="New Offering Section"
                                        type="text"
                                        onChange={handleChange}
                                    />
                                    <FormButtonGroup
                                        disableSubmit={disableSubmit}
                                        loading={formLoading}
                                        handleReset={handleReset}
                                    />
                                </StyledFieldSet>
                            </form>
                        </StyledEventTypeCard>
                    </Card>
                </div>
            </div>
        </StyledServicesBlock>
    )
}

export default ServiceOfferingsForm
