export interface UserProps {
    id: string
    email: string
    firstName: string
    lastName: string
}
export interface AboutPageProps {
    id: string
    description: string
    header: string
    img: {
        name: string
        src: string
        title: string
        type: string
    }
    role: string
    subHeader: string
    title: string
    name: string
}

export interface ContactLinkProps {
    id: string
    icon: string
    label: string
    link: string
}
export interface HomePageProps {
    id: string
    heroBanner: string
    img: {
        name: string
        src: string
        type: string
    }
}
export interface ServicesProps {
    id: string
    description: string
    offerings: [
        {
            events: [
                {
                    description: string
                    img: string
                    title: string
                }
            ]
            section: string
        }
    ]
    pageHeader: string
}
export interface TestimonialsProps {
    id: string
    display: boolean
    name: string
    rating: number
    review: string
    email: string
}
export interface GalleryProps {
    nextUrl: string
    images: {
        media_url: string
        caption: string
    }[]
}
export interface GalleryImageType {
    src: string
    name: string
    type: string
    tags: string[] | null
}
export interface ClientRequestProps {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: number
    description?: string
    eventTime: string
    eventType: string
    eventLocation: string
    eventLocationType: 'Indoors' | 'Outdoors'
    img?: {
        src: string
        name: string
        type: string
    }
    responded: boolean
    createdAt: string
}

export interface DrawerComponentProps {
    content: string
    showing: boolean
    title: string
}
