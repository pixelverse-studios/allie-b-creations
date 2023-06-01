import { format } from 'date-fns'

const DATE_FORMAT = 'MM/dd/yyyy'
const TIME_FORMAT = 'hh:mm a'
const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`

export const formatDate = (date: Date): string =>
    format(new Date(date), DATE_FORMAT)

export const formatTime = (time: Date): string =>
    format(new Date(time), TIME_FORMAT)

export const formatDateTime = (date: Date): string =>
    format(new Date(date), DATE_TIME_FORMAT)

export const formatDbDateTime = (date: {
    seconds: number
    nanoseconds: number
    toDate: Function
}): Date => {
    const formattedCreatedDate = date.toDate().toDateString()
    const formattedCreatedTime = date.toDate().toLocaleTimeString('en-US')

    return new Date(`${formattedCreatedDate} ${formattedCreatedTime}`)
}
