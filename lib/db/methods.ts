import { getContactLinks } from './cms/contact-links'
import { setContactLinks } from '@/lib/redux/slices/contactLinks'
import { getAboutPageData } from './cms/about-page'
import { setAbout } from '@/lib/redux/slices/aboutPage'
import { getServices } from './cms/services'
import { setServices } from '@/lib/redux/slices/services'
import { getHomePage } from './cms/home-page'
import { setHomePage } from '@/lib/redux/slices/homePage'
import { getGalleryContent } from './cms/gallery-page'
import { setGallery } from '../redux/slices/gallery'

export const getAllCmsData = async (dispatch: Function) => {
    try {
        const [aboutPage, contactLinks, homePage, services, gallery] =
            await Promise.all([
                getAboutPageData(),
                getContactLinks(),
                getHomePage(),
                getServices(),
                getGalleryContent()
            ])
        dispatch(setAbout(aboutPage))
        dispatch(setContactLinks(contactLinks))
        dispatch(setHomePage(homePage))
        dispatch(setServices(services))
        dispatch(setGallery(gallery))
    } catch (error) {
        throw error
    }
}
