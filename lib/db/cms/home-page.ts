import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config'
import { HomePageProps } from '@/utils/types/redux'

const HOME = 'home-page'
const homePageCollection = collection(db, HOME)

const getHomePage = async (): Promise<HomePageProps> => {
    try {
        const data = await getDocs(homePageCollection)
        const { heroBanner, heroImg, secondaryHeroImg, secondaryHeroBanner } =
            data.docs[0].data()
        return {
            id: data.docs[0].id,
            heroBanner,
            heroImg,
            secondaryHeroImg,
            secondaryHeroBanner
        }
    } catch (error) {
        throw error
    }
}

const updateHomePage = async (
    id: string,
    fields: {
        heroBanner: string
        heroImg: string
        secondaryHeroBanner: string
        secondaryHeroImg: string
    }
): Promise<HomePageProps> => {
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
