import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Card,
    CircularProgress,
    Collapse,
    IconButton,
    Typography
} from '@mui/material'
import {
    AddCircle,
    ArrowForward,
    Cancel,
    CheckCircle,
    DeleteForever,
    Edit,
    ExpandMore
} from '@mui/icons-material'
import { enqueueSnackbar } from 'notistack'

import { TextField } from '@/components/form'
import bannerUtils from '@/utils/banners'
import {
    deleteOfferingSection,
    editOfferingSection
} from '@/lib/db/cms/services'
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
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [newSectionTitle, setNewSectionTitle] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const eventCount = events?.length

    const onEditIconClick = () => {
        setIsEditing(true)
        setNewSectionTitle(section)
    }
    const onEditSubmit = async () => {
        setLoading(true)
        try {
            const updatedOfferings = await editOfferingSection(
                id,
                newSectionTitle,
                section
            )
            dispatch(setServices(updatedOfferings))
            enqueueSnackbar(
                `Section ${section} has successfully been renamed to ${newSectionTitle}`,
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
    const onEditCancel = () => {
        setIsEditing(false)
        setNewSectionTitle('')
    }
    const onEditFieldUpdate = (e: any) => setNewSectionTitle(e.target.value)
    const onDeleteClick = async () => {
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
                    {isEditing ? (
                        <TextField
                            field={{ value: newSectionTitle, error: '' }}
                            id="name"
                            label="Name"
                            type="text"
                            onChange={onEditFieldUpdate}
                        />
                    ) : (
                        <Typography variant="h6">{section}</Typography>
                    )}
                    <div className="controls">
                        {isEditing ? (
                            <>
                                {loading ? (
                                    <CircularProgress className="loading" />
                                ) : (
                                    <IconButton
                                        disabled={
                                            newSectionTitle === section ||
                                            !newSectionTitle
                                        }
                                        className="submit"
                                        onClick={onEditSubmit}>
                                        <CheckCircle />
                                    </IconButton>
                                )}
                                <IconButton
                                    className="cancel"
                                    onClick={onEditCancel}>
                                    <Cancel />
                                </IconButton>
                            </>
                        ) : null}
                        {!isEditing ? (
                            <>
                                <IconButton
                                    className="edit"
                                    onClick={onEditIconClick}>
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    className="delete"
                                    onClick={onDeleteClick}>
                                    <DeleteForever />
                                </IconButton>
                            </>
                        ) : null}
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
