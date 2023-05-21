export interface UserProps {
    email: string
    firstName: string
    lastName: string
    loading: boolean
}
export interface AboutPageProps {
    [backgroundInfo: string]: string
    header: string
    heroImg: string
    profileImg: string
    role: string
    subHeader: string
    title: string
}
export interface ContactLinkProps {
    [icon: string]: string
    label: string
    link: string
}
export interface HomePageProps {
    [header: string]: string
    heroImg: string
    secondaryHeroImg: string
}
export interface ServicesProps {
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
export interface TestimonialsProps {
    id: string
    display: boolean
    name: string
    rating: number
    review: string
}
