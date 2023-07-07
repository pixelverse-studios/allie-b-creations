import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config'
import { HomePageProps } from '@/utils/types/redux'

const HOME = 'home-page'
const homePageCollection = collection(db, HOME)

const getHomePage = async (): Promise<HomePageProps[]> => {
    try {
        const data = await getDocs(homePageCollection)
        return data.docs.map(doc => {
            const {
                heroBanner,
                heroImg,
                secondaryHeroImg,
                secondaryHeroBanner
            } = doc.data()
            return {
                id: doc.id,
                heroBanner,
                heroImg,
                secondaryHeroImg,
                secondaryHeroBanner
            }
        })
    } catch (error) {
        throw error
    }
}

const updateHomePage = async (
    id: string,
    fields: {
        heroBanner: string
        heroImg: string
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
