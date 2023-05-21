import { getAboutPageData } from './cms/about-page'
import { setAbout } from '@/lib/redux/slices/aboutPage'
import { getContactLinks } from './cms/contact-links'
import { setContactLinks } from '@/lib/redux/slices/contactLinks'
import { getHomePage } from './cms/home-page'
import { setHomePage } from '@/lib/redux/slices/homePage'
import { getServices } from './cms/services'
import { setServices } from '@/lib/redux/slices/services'
import { getTestimonials } from './cms/testimonials'
import { setTestimonials } from '../redux/slices/testimonials'

export const getAllCmsData = async (dispatch: Function) => {
    try {
        const [aboutPage, contactLinks, homePage, services, testimonials] =
            await Promise.all([
                getAboutPageData(),
                getContactLinks(),
                getHomePage(),
                getServices(),
                getTestimonials()
            ])
        dispatch(setAbout(aboutPage))
        dispatch(setContactLinks(contactLinks))
        dispatch(setHomePage(homePage))
        dispatch(setServices(services))
        dispatch(setTestimonials(testimonials))
    } catch (error) {
        throw error
    }
}
