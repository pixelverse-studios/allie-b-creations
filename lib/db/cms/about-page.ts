import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { AboutPageProps } from '@/utils/types/redux'

const getAboutPageData = async (): Promise<AboutPageProps> => {
    try {
        const aboutPageRef = collection(db, 'about-page')
        const data = await getDocs(aboutPageRef)
        const { backgroundInfo, header, profileImg, role } = data.docs[0].data()
        const aboutPageData = {
            id: data.docs[0].id,
            backgroundInfo,
            header,
            profileImg,
            role
        }

        return aboutPageData
    } catch (error) {
        throw error
    }
}

export { getAboutPageData }
