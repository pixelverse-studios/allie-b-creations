import { getServices } from './cms/services'
import { getHomePage } from './cms/home-page'
import { getContactLinks } from './cms/contact-links'
import { getCallToAction } from './cms/call-to-action'
import { getAboutPageData } from './cms/about-page'

export const getAllCmsData = async () => {
    try {
        const [aboutPage, contactLinks, homePage, services, callToAction] =
            await Promise.all([
                getAboutPageData(),
                getContactLinks(),
                getHomePage(),
                getServices(),
                getCallToAction()
            ])
        return {
            aboutPage,
            contactLinks,
            homePage,
            services,
            callToAction
        }
    } catch (error) {
        throw error
    }
}
