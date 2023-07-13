import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config'
import { HomePageProps } from '@/utils/types/redux'

const HOME = 'home-page'
const homePageCollection = collection(db, HOME)

const getHomePage = async (): Promise<HomePageProps[]> => {
    try {
        const data = await getDocs(homePageCollection)
        return data.docs.map(doc => {
            const { heroBanner, img } = doc.data()
            return {
                id: doc.id,
                heroBanner,
                img
            }
        })
    } catch (error) {
        throw error
    }
}

const updateHomePage = async (
    id: string,
    fields: {
        heroBanner?: string
        img?: string
    }
): Promise<HomePageProps[]> => {
    try {
        const ref = doc(db, HOME, id)
        await updateDoc(ref, {
            ...fields
        })
        const homePageData = await getHomePage()
        return homePageData
    } catch (error) {
        throw error
    }
}

export { getHomePage, updateHomePage }
