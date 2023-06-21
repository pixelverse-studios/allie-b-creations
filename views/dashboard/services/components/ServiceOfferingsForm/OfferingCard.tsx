import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, IconButton, Typography, Popover, Collapse } from '@mui/material'
import {
    ExpandMore,
    ArrowForward,
    AddCircle,
    Edit,
    DeleteForever
} from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'

import bannerUtils from '@/utils/banners'
import { deleteOfferingSection } from '@/lib/db/cms/services'
import OfferingItem from './OfferingItem'
import { StyledEventTypeCard } from '../../StyledServicesWidget'
import { uniqueId } from 'lodash'
import { setServices } from '@/lib/redux/slices/services'

const { statuses, messages } = bannerUtils
export interface OfferingProps {
    section: string
    events: { description: string; img: string; title: string }[]
}

export const ADD_NEW = 'Add a New Offering'

const OfferingCard = ({ section, events }: OfferingProps) => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: any) => state.services)
    const [expanded, setExpanded] = useState<boolean>(false)
    const eventCount = events?.length

    const onDeleteClick = async (section: string) => {
        // set loading
        try {
            const newServices = await deleteOfferingSection(id, section)
            dispatch(setServices(newServices))
            enqueueSnackbar(
                `Section ${section} has been deleted successfully`,
                {
                    variant: statuses.SUCCESS
                }
            )
        } catch (error) {
            enqueueSnackbar(messages.TECHNICAL_DIFFICULTIES, {
                variant: statuses.ERROR
            })
        }
    }

    return (
        <Card>
            <StyledEventTypeCard className="offeringCard">
                <div className="cardHeader">
                    <Typography variant="h6">{section}</Typography>
                    <div className="controls">
                        <IconButton className="edit">
                            <Edit />
                        </IconButton>
                        <IconButton
                            className="delete"
                            onClick={() => onDeleteClick(section)}>
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
                        <ExpandMore
                            className={`${expanded ? 'flip' : ''} collapseIcon`}
                        />
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
            </StyledEventTypeCard>
        </Card>
    )
}

export default OfferingCard
