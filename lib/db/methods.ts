import { getServices } from './cms/services'
import { getHomePage } from './cms/home-page'
import { getContactLinks } from './cms/contact-links'
import { getCallToAction } from './cms/call-to-action'
import { getAboutPageData } from './cms/about-page'
import { setAbout } from '@/lib/redux/slices/aboutPage'
import { setContactLinks } from '@/lib/redux/slices/contactLinks'
import { setHomePage } from '@/lib/redux/slices/homePage'
import { setServices } from '@/lib/redux/slices/services'
import { setCallToAction } from '@/lib/redux/slices/callToAction'

export const getAllCmsData = async (dispatch: Function) => {
    try {
        const [aboutPage, contactLinks, homePage, services, callToAction] =
            await Promise.all([
                getAboutPageData(),
                getContactLinks(),
                getHomePage(),
                getServices(),
                getCallToAction()
            ])
        dispatch(setAbout(aboutPage))
        dispatch(setContactLinks(contactLinks))
        dispatch(setHomePage(homePage))
        dispatch(setServices(services))
        dispatch(setCallToAction(callToAction))
    } catch (error) {
        throw error
    }
}
