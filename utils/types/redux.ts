export interface UserProps {
    email: string
    firstName: string
    lastName: string
    loading: boolean
}
export interface AboutPageProps {
    backgroundInfo: string[]
    header: string
    profileImg: string
    role: string
}
export interface ContactLinkProps {
    id: string
    icon: string
    label: string
    link: string
}
export interface HomePageProps {
    id: string
    header: string
    heroImg: string
    secondaryHeroImg: string
    secondaryHeroBanner: string
}
export interface ServicesProps {
    id: string
    description: string[]
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
export interface GalleryProps {
    id: string
    img: string
    tag: string
}
export interface ContactPageProps {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: number
    description: string
    eventDate: Date | null
    eventLocation: string
    eventType: 'indoors' | 'outdoors'
    inspirationImg: string
    responded: boolean
}
