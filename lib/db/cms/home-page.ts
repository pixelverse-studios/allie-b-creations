import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { HomePageProps } from '@/utils/types/redux'

const getHomePage = async (): Promise<HomePageProps> => {
    try {
        const homePageRef = collection(db, 'home-page')
        const data = await getDocs(homePageRef)
        const { header, heroImg, secondaryHeroImg, secondaryHeroBanner } =
            data.docs[0].data()
        return {
            id: data.docs[0].id,
            header,
            heroImg,
            secondaryHeroImg,
            secondaryHeroBanner
        }
    } catch (error) {
        throw error
    }
}

export { getHomePage }
