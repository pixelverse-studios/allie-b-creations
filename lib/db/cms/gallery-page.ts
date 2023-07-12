import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { GalleryProps } from '@/utils/types/redux'
import axios from 'axios'

// Instagrams API currently only gives 25 images at a time
// It then provoides you with a link for the next api call if there is more then 25 iamges

const getGalleryContent = async (): Promise<GalleryProps> => {
    const returnData = {
        nextUrl: '',
        images: [
            {
                media_url: '',
                caption: ''
            }
        ]
    }
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp,caption,permalink&access_token=${process.env.NEXT_PUBLIC_IG_SECRET}`
    try {
        const response = await axios.get(url)
        const data = response.data

        returnData.nextUrl = data.paging.next
        returnData.images = data.data.map(
            (item: { media_url: any; caption: any }) => {
                return {
                    media_url: item.media_url,
                    caption: item.caption
                }
            }
        )
        return returnData
    } catch (error) {
        throw error
    }
}

// const getNextImages = async () => {
//     try {
//         const data = await fetch(nextImageSetUrl)
//         const feed = await data.json()
//         const imageUrls = feed.data.map(
//             (item: { media_url: any }) => item.media_url
//         )

//         if (feed.paging.next) {
//             setNextImageSetUrl(feed.paging.next)
//         }

//         const validImageUrls = await Promise.all(
//             imageUrls.map(imageUrl => {
//                 return new Promise((resolve, reject) => {
//                     const img = new Image()
//                     img.src = imageUrl
//                     //I was deep . idk wtf this even does but it was the cmd v of a lifetime
//                     img.onload = () => resolve(imageUrl)
//                     img.onerror = () => resolve(null)
//                 })
//             })
//         )

//         const filteredImageUrls = validImageUrls.filter(
//             imageUrl => imageUrl !== null
//         )
//         //These errors are errors but they belong here right now
//         setImageUrlArray(prevImageUrlArray => [
//             ...prevImageUrlArray,
//             ...filteredImageUrls
//         ])
//         return imageUrlArray
//     } catch (error: any) {
//         console.error(error)
//     }
// }

export { getGalleryContent }
