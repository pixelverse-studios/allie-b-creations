export const DRAWER_TYPES = {
    CLIENT_REQUEST: 'CLIENT_REQUEST',
    TESTIMONIAL: 'TESTIMONIAL'
}

export const FORM_ACTIONS = {
    UPDATE: 'UPDATE',
    RESET: 'RESET',
    IMPORT: 'IMPORT'
}

export const SELECT_ACTIONS = {
    SHOW: 'SHOW',
    HIDDEN: 'HIDDEN',
    LOW_RATING: 'LOW_RATING',
    HIGH_RATING: 'HIGH_RATING',
    NEWEST: 'NEWEST',
    OLDEST: 'OLDEST'
}

export const TESTIMONIAL_SORT_VALUES = [
    {
        value: SELECT_ACTIONS.SHOW,
        label: 'Displayed'
    },
    {
        value: SELECT_ACTIONS.HIDDEN,
        label: 'Hidden'
    },
    {
        value: SELECT_ACTIONS.LOW_RATING,
        label: 'Lowest Rating'
    },
    {
        value: SELECT_ACTIONS.HIGH_RATING,
        label: 'Hightest Rating'
    },
    {
        value: SELECT_ACTIONS.NEWEST,
        label: 'Newest'
    },
    {
        value: SELECT_ACTIONS.OLDEST,
        label: 'Oldest'
    }
]

export const TESTIMONIAL_FILTER_ACTIONS = {
    SHOW_DISPLAYED: 'SHOW_DISPLAYED',
    SHOW_HIDDEN: 'SHOW_HIDDEN',
    SHOW_ALL: 'SHOW_ALL'
}

export const TESTIMONIAL_FILTER_VALUES = [
    { value: TESTIMONIAL_FILTER_ACTIONS.SHOW_ALL, label: 'All' },
    { value: TESTIMONIAL_FILTER_ACTIONS.SHOW_DISPLAYED, label: 'Displayed' },
    { value: TESTIMONIAL_FILTER_ACTIONS.SHOW_HIDDEN, label: 'Hidden' }
]
