import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'

const getAboutPageData = async () => {
    try {
        const aboutPageRef = collection(db, 'about-page')
        const data = await getDocs(aboutPageRef)
        const {
            backgroundInfo,
            header,
            heroImg,
            profileImg,
            role,
            subHeader,
            title
        } = data.docs[0].data()
        const aboutPageData = {
            id: data.docs[0].id,
            backgroundInfo,
            header,
            heroImg,
            profileImg,
            role,
            subHeader,
            title
        }

        return aboutPageData
    } catch (error) {
        throw error
    }
}

export { getAboutPageData }
