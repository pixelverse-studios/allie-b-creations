export const CLIENT_TABLE_COLUMNS = [
    { field: 'name', headerName: 'Name', minWidth: 120, customRender: true },
    { field: 'email', headerName: 'Email', minWidth: 100 },
    { field: 'phone', headerName: 'Phone', minWidth: 80 },
    { field: 'eventTime', headerName: 'Date', minWidth: 190 },
    { field: 'eventType', headerName: 'Event Type', minWidth: 100 },
    { field: 'eventLocation', headerName: 'Address', minWidth: 250 },
    {
        field: 'eventLocationType',
        headerName: 'Indoors/Outdoors',
        minWidth: 90
    },
    { field: 'description', headerName: 'Description', minWidth: 140 },
    {
        field: 'img',
        headerName: 'Inspiration Pic',
        minWidth: 140,
        customRender: true
    }
]
