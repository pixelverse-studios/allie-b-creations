import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'

const getHomePage = async () => {
    try {
        const homePageRef = collection(db, 'home-page')
        const data = await getDocs(homePageRef)
        const { header, heroImg, secondaryHeroImg } = data.docs[0].data()
        return {
            id: data.docs[0].id,
            header,
            heroImg,
            secondaryHeroImg
        }
    } catch (error) {
        throw error
    }
}

export { getHomePage }
