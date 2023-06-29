import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../config'
import { AboutPageProps } from '@/utils/types/redux'

const ABOUT = 'about-page'
const aboutPageCollection = collection(db, ABOUT)

const getAboutPageData = async (): Promise<AboutPageProps[]> => {
    try {
        const data = await getDocs(aboutPageCollection)

        return data.docs.map(doc => {
            const { info, header, profileImg, role, subHeader, title } =
                doc.data()
            return {
                id: doc.id,
                info,
                header,
                subHeader,
                profileImg,
                title,
                role
            }
        })
    } catch (error) {
        throw error
    }
}

const updateAboutPageData = async (
    id: string,
    fields: {
        info: string[]
        header: string
        profileImg: string
        role: string
        subHeader: string
        title: string
    }
): Promise<AboutPageProps[]> => {
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
