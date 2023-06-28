import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../config'
import { AboutPageProps } from '@/utils/types/redux'

const ABOUT = 'about-page'
const aboutPageCollection = collection(db, ABOUT)

const getAboutPageData = async (): Promise<AboutPageProps> => {
    try {
        const data = await getDocs(aboutPageCollection)
        const { backgroundInfo, header, profileImg, role, subHeader, title } =
            data.docs[0].data()

        const aboutPageData = {
            id: data.docs[0].id,
            backgroundInfo,
            header,
            subHeader,
            profileImg,
            title,
            role
        }

        return aboutPageData
    } catch (error) {
        throw error
    }
}

const updateAboutPageData = async (
    id: string,
    fields: {
        backgroundInfo: string[]
        header: string
        profileImg: string
        role: string
        subHeader: string
        title: string
    }
): Promise<AboutPageProps> => {
    try {
        const ref = doc(db, ABOUT, id)
        await updateDoc(ref, {
            ...fields
        })

        const aboutPageData = await getAboutPageData()
        return aboutPageData
    } catch (error) {
        throw error
    }
}

export { getAboutPageData, updateAboutPageData }
