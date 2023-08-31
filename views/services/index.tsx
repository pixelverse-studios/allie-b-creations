import { useSelector } from 'react-redux'
import HeaderWithPaintStreaks from '@/components/title/headerWithPaint'
import { FadeIn } from '@/components/animator'
import { StyledServicesPage } from './StyledServicesPage'

const ServicesView = () => {
    const services = useSelector((state: any) => state.services)

    if (!services?.id) {
        return <span>loading...</span>
    }

    return (
        <StyledServicesPage>
            <FadeIn duration={2000}>
                <HeaderWithPaintStreaks title={services.pageHeader} />
                <p>{services.description}</p>
            </FadeIn>
            <div className="serviceCategories">
                {services.offerings.map(
                    (offering: { section: string; events: any }) => {
                        if (offering.events?.length > 0)
                            return (
                                <div className="offeringBlock">
                                    <FadeIn duration={2000}>
                                        <h2>{offering.section}</h2>
                                        <div className="events">
                                            {offering.events?.map(
                                                (event: {
                                                    img: {
                                                        src: string
                                                        type: string
                                                        name: string
                                                    }
                                                    description: string
                                                    title: string
                                                }) => (
                                                    <div className="event">
                                                        <img
                                                            src={event.img.src}
                                                            alt={event.img.name}
                                                        />
                                                        <span>
                                                            {event.title}
                                                        </span>
                                                        <p>
                                                            {event.description}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </FadeIn>
                                </div>
                            )
                    }
                )}
            </div>
        </StyledServicesPage>
    )
}

export default ServicesView
