import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import {
    setRequestsFetched,
    setAllRequests,
    setSelectedClient
} from '@/lib/redux/slices/client-requests'
import { getClientRequests } from '@/lib/db/cms/client-requests'
import { LINE_BREAK } from '@/components/drawer/content/ContactForm'
import SelectedRequest from './SelectedRequest'
import { StyledClientRequestsWidget } from './StyledClientRequestsWidget'

const ClientRequestsWidget = () => {
    const dispatch = useDispatch()
    const { requests, fetched, contact } = useSelector(
        (state: any) => state.clientRequests
    )
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!fetched) {
            setLoading(true)
            dispatch(setRequestsFetched(true))
            getClientRequests()
                .then(res => {
                    const requests = res.map(client => ({
                        ...client,
                        img: client?.img?.src
                            ? client.img
                            : { src: '', name: '', type: '' }
                    }))
                    dispatch(setAllRequests(requests))
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    // banner
                })
        }
    }, [requests, fetched])

    const onRequestSelect = (request: any) =>
        dispatch(setSelectedClient(request))

    if (loading) {
        return (
            <StyledClientRequestsWidget>
                <h2>Client Requests</h2>
            </StyledClientRequestsWidget>
        )
    }

    return (
        <StyledClientRequestsWidget>
            <h2>Client Requests</h2>
            <div className="requestsBlock">
                <List className="requestsList">
                    {requests?.map((request: any) => {
                        const isSelected = contact?.email === request?.email
                        return (
                            <ListItem>
                                <ListItemButton
                                    onClick={() => onRequestSelect(request)}
                                    selected={isSelected}
                                    className={`requestItem ${
                                        isSelected ? 'active' : ''
                                    }`}>
                                    <ListItemText
                                        primary={`${request.firstName} ${request.lastName}`}
                                        secondary={`${request.eventType} - ${request.eventTime}`}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
                <SelectedRequest />
            </div>
        </StyledClientRequestsWidget>
    )
}

export default ClientRequestsWidget
