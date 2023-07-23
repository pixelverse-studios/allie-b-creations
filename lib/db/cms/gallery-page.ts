import { GalleryImageType } from '@/utils/types/redux'
// import axios from 'axios'
// import validImageUrls from '@/utils/validations/image'

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc
} from 'firebase/firestore'
import { db } from '../config'

// Instagrams API currently only gives 25 images at a time
// It then provoides you with a link for the next api call if there is more then 25 iamges

// const getGalleryContent = async (): Promise<GalleryProps> => {
//     const url = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp,caption,permalink&access_token=${process.env.NEXT_PUBLIC_IG_SECRET}`
//     try {
//         const response = await axios.get(url)
//         const { data } = response

//         const initialImages = data.data.map(
//             (item: { media_url: string; caption: string }) => ({
//                 media_url: item.media_url,
//                 caption: item.caption
//             })
//         )

//         const validImgArray = (await validImageUrls(initialImages)) as {
//             media_url: string
//             caption: string
//         }[]

//         return {
//             nextUrl: data.paging.next,
//             images: validImgArray
//         }
//     } catch (error) {
//         throw error
//     }
// }

// const getNextImages = async (data: any) => {
//     const { nextUrl, images } = data
//     try {
//         const response = await axios.get(nextUrl)
//         const responseData = response.data

//         const initialImages = responseData.data.map(
//             (item: { media_url: any; caption: any }) => ({
//                 media_url: item.media_url,
//                 caption: item.caption
//             })
//         )

//         const validImgArray = (await validImageUrls(initialImages)) as {
//             media_url: string
//             caption: string
//         }[]

//         const updatedImages = [...images, ...validImgArray]
//         return {
//             nextUrl: responseData.paging.next,
//             images: updatedImages
//         }
//     } catch (error: any) {
//         console.error(error)
//     }
// }

// export { getGalleryContent, getNextImages }
const GALLERY = 'gallery'
const galelryPageCollection = collection(db, GALLERY)
const getGalleryPageData = async () => {
    try {
        const data = await getDocs(galelryPageCollection)
        const galleryItems = data.docs.map(doc => {
            const { src, type, name, tags } = doc.data()

            return { id: doc.id, src, type, name, tags }
        })
        console.log({ galleryItems })
        return galleryItems
    } catch (error) {
        throw error
    }
}

const addGalleryItems = async (newItems: GalleryImageType[]) => {
    try {
        await Promise.all(
            newItems.map(item => addDoc(collection(db, GALLERY), { ...item }))
        )
        return await getGalleryPageData()
    } catch (error) {
        throw error
    }
}

const deleteGalleryItem = async (id: string) => {
    try {
        await deleteDoc(doc(db, GALLERY, id))
        const refreshed = await getGalleryPageData()
        return refreshed
    } catch (error) {
        throw error
    }
}

export { getGalleryPageData, addGalleryItems, deleteGalleryItem }
