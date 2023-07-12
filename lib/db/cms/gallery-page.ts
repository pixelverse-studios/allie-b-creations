import { useSelector } from 'react-redux'
import { GalleryProps } from '@/utils/types/redux'
import axios from 'axios'
import { RootState } from '@/lib/redux/store'

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

const getNextImages = async (data: any) => {
    const { nextUrl, images } = data
    try {
        const response = await axios.get(nextUrl)
        const responseData = response.data

        const newImages = responseData.data.map(
            (item: { media_url: any; caption: any }) => {
                return {
                    media_url: item.media_url,
                    caption: item.caption
                }
            }
        )

        const updatedImages = [...images, ...newImages]

        return {
            nextUrl: responseData.paging.next,
            images: updatedImages
        }
    } catch (error: any) {
        console.error(error)
    }
}

export { getGalleryContent, getNextImages }
