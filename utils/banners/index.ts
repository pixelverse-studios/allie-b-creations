// STATUSES
const SUCCESS = 'success' as 'success'
const ERROR = 'error' as 'error'
const WARNING = 'warning' as 'warning'

// MESSAGES
const REACH_OUT_FOR_HELP =
    'Please try again or reach out to info@alliebcreations.com'

const LOGGED_IN = 'Logged in successfully'
const LOGGED_OUT = 'Logged out successfully'
const LOG_OUT_ERROR = `There was an unexpected issue logging you out. ${REACH_OUT_FOR_HELP}`
const TECHNICAL_DIFFICULTIES = `We are experiencing technical difficulties. ${REACH_OUT_FOR_HELP}`
const FAILED_UPDATES = (label: string) =>
    `Your ${label} updates could not be saved.`
const SAVED_UPDATES = (label: string) =>
    `Your ${label} changes have been saved.`

const statuses = { SUCCESS, ERROR, WARNING }
const messages = {
    TECHNICAL_DIFFICULTIES,
    LOGGED_IN,
    LOGGED_OUT,
    LOG_OUT_ERROR,
    FAILED_UPDATES,
    SAVED_UPDATES
}

export { statuses, messages }
