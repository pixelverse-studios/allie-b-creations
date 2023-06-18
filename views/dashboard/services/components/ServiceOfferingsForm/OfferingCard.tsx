import { useState, MouseEvent } from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    CardContent,
    IconButton,
    Typography,
    Popover,
    Collapse
} from '@mui/material'
import {
    ExpandMore,
    ArrowForward,
    AddCircle,
    Edit,
    Info,
    DeleteForever,
    MoreVert
} from '@mui/icons-material'
import OfferingItem from './OfferingItem'
import { StyledEventTypeCard } from '../../StyledServicesWidget'
import { uniqueId } from 'lodash'

export interface OfferingProps {
    section: string
    events: { description: string; img: string; title: string }[]
}

export const ADD_NEW = 'Add a New Offering'

const OfferingCard = ({ section, events }: OfferingProps) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const eventCount = events?.length

    return (
        <Card>
            <StyledEventTypeCard className="offeringCard">
                <div className="cardHeader">
                    <Typography variant="h6">{section}</Typography>
                    <div className="controls">
                        <IconButton>
                            <Edit />
                        </IconButton>
                        <IconButton>
                            <DeleteForever />
                        </IconButton>
                    </div>
                </div>
                <div className="cardBody">
                    <Typography variant="subtitle1" gutterBottom>
                        {eventCount} {eventCount !== 1 ? 'Events' : 'Event'}{' '}
                        Offered
                    </Typography>
                    <IconButton onClick={() => setExpanded(!expanded)}>
                        <ExpandMore className={expanded ? 'flip' : ''} />
                    </IconButton>
                </div>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                </Collapse>
                {/* <CardContent>
                </CardContent> */}
                {/* <Accordion>
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
                </Accordion> */}
            </StyledEventTypeCard>
        </Card>
    )
}

export default OfferingCard
