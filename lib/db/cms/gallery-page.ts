import { GalleryProps } from '@/utils/types/redux'
import axios from 'axios'
import validImageUrls from '@/utils/validations/image'

// Instagrams API currently only gives 25 images at a time
// It then provoides you with a link for the next api call if there is more then 25 iamges

const getGalleryContent = async (): Promise<GalleryProps> => {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp,caption,permalink&access_token=${process.env.NEXT_PUBLIC_IG_SECRET}`
    try {
        const response = await axios.get(url)
        const { data } = response

        const initialImages = data.data.map(
            (item: { media_url: string; caption: string }) => ({
                media_url: item.media_url,
                caption: item.caption
            })
        )

        const validImgArray = (await validImageUrls(initialImages)) as {
            media_url: string
            caption: string
        }[]

        return {
            nextUrl: data.paging.next,
            images: validImgArray
        }
    } catch (error) {
        throw error
    }
}

const getNextImages = async (data: any) => {
    const { nextUrl, images } = data
    try {
        const response = await axios.get(nextUrl)
        const responseData = response.data

        const initialImages = responseData.data.map(
            (item: { media_url: any; caption: any }) => ({
                media_url: item.media_url,
                caption: item.caption
            })
        )

        const validImgArray = (await validImageUrls(initialImages)) as {
            media_url: string
            caption: string
        }[]

        const updatedImages = [...images, ...validImgArray]
        return {
            nextUrl: responseData.paging.next,
            images: updatedImages
        }
    } catch (error: any) {
        console.error(error)
    }
}

export { getGalleryContent, getNextImages }
