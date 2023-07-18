import { useSelector } from 'react-redux'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton
} from '@mui/material'
import { DownloadForOffline } from '@mui/icons-material'
import { TextField } from '@/components/form'
import { StyledSelectedRequest } from './StyledClientRequestsWidget'

const SelectedRequest = () => {
    const { contact } = useSelector((state: any) => state.clientRequests)

    const onImgDownload = async () => {
        const img = await fetch(contact.img.src)
        const imageBlog = await img.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a')
        link.href = imageURL
        link.download = contact.img.name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    if (!contact?.email) return null
    return (
        <StyledSelectedRequest>
            <h3>Client</h3>
            <div className="requestFields">
                <TextField
                    id="name"
                    label="Name"
                    type="text"
                    onChange={() => null}
                    disabled
                    variant="outlined"
                    field={{
                        value: `${contact.firstName} ${contact.lastName}`,
                        error: ''
                    }}
                />
                <TextField
                    id="email"
                    label="Email"
                    type="text"
                    onChange={() => null}
                    disabled
                    variant="outlined"
                    field={{
                        value: contact.email,
                        error: ''
                    }}
                />
                <TextField
                    id="phone"
                    label="Phone"
                    type="text"
                    onChange={() => null}
                    disabled
                    variant="outlined"
                    field={{
                        value: contact.phone,
                        error: ''
                    }}
                />
            </div>
            <h3>Event Details</h3>
            <div className="requestFields">
                <TextField
                    id="eventTime"
                    label="Day & Time"
                    type="text"
                    onChange={() => null}
                    disabled
                    variant="outlined"
                    field={{
                        value: contact.eventTime,
                        error: ''
                    }}
                />
                <TextField
                    id="eventLocation"
                    label="Address"
                    type="text"
                    onChange={() => null}
                    disabled
                    variant="outlined"
                    field={{
                        value: contact.eventLocation,
                        error: ''
                    }}
                />
                <TextField
                    id="eventLocationType"
                    label="Indoors/Outdoors"
                    type="text"
                    onChange={() => null}
                    disabled
                    variant="outlined"
                    field={{
                        value: contact.eventLocationType,
                        error: ''
                    }}
                />
            </div>
            {/* <div className="requestFields"> */}
            {contact?.description ? (
                <TextField
                    id="description"
                    label="Description/details"
                    type="textarea"
                    rows={5}
                    onChange={() => null}
                    disabled
                    variant="outlined"
                    field={{
                        value: contact.description,
                        error: ''
                    }}
                />
            ) : null}
            {contact?.img?.src ? (
                <Card className="inspoImgCard">
                    <CardMedia
                        image={contact.img.src}
                        title="Inspiration Image"
                        className="cardMedia"
                    />
                    <CardContent>
                        Inspiration Image. Download below, if needed
                    </CardContent>
                    <CardActions>
                        <IconButton
                            onClick={onImgDownload}
                            className="imgDownload">
                            <DownloadForOffline />
                        </IconButton>
                    </CardActions>
                </Card>
            ) : null}
            {/* </div> */}
        </StyledSelectedRequest>
    )
}

export default SelectedRequest
