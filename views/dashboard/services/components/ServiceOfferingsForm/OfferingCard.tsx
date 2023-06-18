import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material'
import { ExpandMore, ArrowForward, AddCircle } from '@mui/icons-material'
import OfferingItem from './OfferingItem'
import { StyledEventTypeCard } from '../../StyledServicesWidget'
import { uniqueId } from 'lodash'

export interface OfferingProps {
    section: string
    events: { description: string; img: string; title: string }[]
}

export const ADD_NEW = 'Add a New Offering'

const OfferingCard = ({ section, events }: OfferingProps) => {
    const eventCount = events?.length
    return (
        <StyledEventTypeCard className="offeringCard">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <div className="offeringSectionTitle">
                        <Typography variant="h6" gutterBottom>
                            {section}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {eventCount} {eventCount !== 1 ? 'Events' : 'Event'}{' '}
                            Offered
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="offeringsList">
                        {events?.map((event: any) => (
                            <OfferingItem
                                key={uniqueId()}
                                eventTitle={event.title}
                                Icon={ArrowForward}
                                section={section}
                            />
                        ))}
                        <OfferingItem
                            eventTitle={ADD_NEW}
                            Icon={AddCircle}
                            section={section}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </StyledEventTypeCard>
    )
}

export default OfferingCard
