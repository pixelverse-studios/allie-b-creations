export const DRAWER_TYPES = {
    CLIENT_REQUEST: 'CLIENT_REQUEST',
    TESTIMONIAL: 'TESTIMONIAL'
}

export const FORM_ACTIONS = {
    UPDATE: 'UPDATE',
    RESET: 'RESET',
    IMPORT: 'IMPORT'
}

export const TESTIMONIAL_SORT_ITEMS = {
    DISPLAYED: 'DISPLAYED',
    HIDDEN: 'HIDDEN',
    LOW_RATING: 'LOW_RATING',
    HIGH_RATING: 'HIGH_RATING',
    NEWEST: 'NEWEST',
    OLDEST: 'OLDEST'
}

export const TESTIMONIAL_SORT_VALUES = [
    {
        value: TESTIMONIAL_SORT_ITEMS.DISPLAYED,
        label: 'Displayed'
    },
    {
        value: TESTIMONIAL_SORT_ITEMS.HIDDEN,
        label: 'Hidden'
    },
    {
        value: TESTIMONIAL_SORT_ITEMS.LOW_RATING,
        label: 'Lowest Rating'
    },
    {
        value: TESTIMONIAL_SORT_ITEMS.HIGH_RATING,
        label: 'Hightest Rating'
    },
    {
        value: TESTIMONIAL_SORT_ITEMS.NEWEST,
        label: 'Newest'
    },
    {
        value: TESTIMONIAL_SORT_ITEMS.OLDEST,
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

export const testimonialFilterMap = new Map([
    [
        TESTIMONIAL_FILTER_ACTIONS.SHOW_DISPLAYED,
        {
            run: (array: any) => array.filter((item: any) => item.display)
        }
    ],
    [
        TESTIMONIAL_FILTER_ACTIONS.SHOW_HIDDEN,
        {
            run: (array: any) => array.filter((item: any) => !item.display)
        }
    ],
    [
        TESTIMONIAL_FILTER_ACTIONS.SHOW_ALL,
        {
            run: (array: any) => array
        }
    ],
    [
        '',
        {
            run: (array: any) => array
        }
    ]
])

export const testimonialSortMap = new Map([
    [
        TESTIMONIAL_SORT_ITEMS.DISPLAYED,
        {
            run: (array: any) =>
                array.sort(
                    (a: { display: number }, b: { display: number }) =>
                        b.display - a.display
                )
        }
    ],
    [
        TESTIMONIAL_SORT_ITEMS.HIDDEN,
        {
            run: (array: any) =>
                array.sort(
                    (a: { display: number }, b: { display: number }) =>
                        a.display - b.display
                )
        }
    ],
    [
        TESTIMONIAL_SORT_ITEMS.LOW_RATING,
        {
            run: (array: any) =>
                array.sort(
                    (a: { rating: number }, b: { rating: number }) =>
                        a.rating - b.rating
                )
        }
    ],
    [
        TESTIMONIAL_SORT_ITEMS.HIGH_RATING,
        {
            run: (array: any) =>
                array.sort(
                    (a: { rating: number }, b: { rating: number }) =>
                        b.rating - a.rating
                )
        }
    ],
    [
        TESTIMONIAL_SORT_ITEMS.NEWEST,
        {
            run: (array: any) =>
                array.sort(
                    (a: { createdAt: string }, b: { createdAt: string }) =>
                        Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )
        }
    ],
    [
        TESTIMONIAL_SORT_ITEMS.OLDEST,
        {
            run: (array: any) =>
                array.sort(
                    (a: { createdAt: string }, b: { createdAt: string }) =>
                        Date.parse(a.createdAt) - Date.parse(b.createdAt)
                )
        }
    ],
    [
        '',
        {
            run: (array: any) =>
                array.sort(
                    (a: { createdAt: string }, b: { createdAt: string }) =>
                        Date.parse(a.createdAt) - Date.parse(b.createdAt)
                )
        }
    ]
])

export const CLOUD_KEYS = {
    UPLOAD_URL:
        'https://api.cloudinary.com/v1_1/ezpzcoding-cloudinary/image/upload',
    PRESET_FOLDER: 'allie-b-creations',
    OVERRIDE: 'filename_override',
    PUBLIC: 'https://res.cloudinary.com/ezpzcoding-cloudinary'
}
