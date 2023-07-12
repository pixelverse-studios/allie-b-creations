import { useEffect, useState } from 'react'
import { Dialog, ImageList, ImageListItem } from '@mui/material'

const GalleryPage = () => {
    const [imageSrc, setImgSrc] = useState('')
    const [open, setOpen] = useState(false)

    // State for images
    const [imageUrlArray, setImageUrlArray] = useState([])
    const [nextImageSetUrl, setNextImageSetUrl] = useState('')

    // Instagrams API currently only gives 25 images at a time
    // It then provoides you with a link for the next api call if there is more then 25 iamges
    const getInitialImages = async () => {
        //Initial URL for the 1st API call
        const url = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp,caption,permalink&access_token=${process.env.NEXT_PUBLIC_IG_SECRET}`
        try {
            const data = await fetch(url)
            const feed = await data.json()
            console.log('feed :>> ', feed)
            const imageUrls = feed.data.map(
                (item: { media_url: any }) => item.media_url
            )
            //This will check if there is a link for more images to be called.
            if (feed.paging.next) {
                setNextImageSetUrl(feed.paging.next)
            }

            setImageUrlArray(imageUrls)
            return imageUrlArray
        } catch (error: any) {
            console.error(error.message)
        }
    }
    console.log(imageUrlArray)
    //This function will use the URL provided by the initial call if there is more images to be loaded.
    const getNextImages = async () => {
        try {
            const data = await fetch(nextImageSetUrl)
            const feed = await data.json()
            const imageUrls = feed.data.map(
                (item: { media_url: any }) => item.media_url
            )

            if (feed.paging.next) {
                setNextImageSetUrl(feed.paging.next)
            }

            const validImageUrls = await Promise.all(
                imageUrls.map(imageUrl => {
                    return new Promise((resolve, reject) => {
                        const img = new Image()
                        img.src = imageUrl
                        //I was deep . idk wtf this even does but it was the cmd v of a lifetime
                        img.onload = () => resolve(imageUrl)
                        img.onerror = () => resolve(null)
                    })
                })
            )

            const filteredImageUrls = validImageUrls.filter(
                imageUrl => imageUrl !== null
            )
            //These errors are errors but they belong here right now
            setImageUrlArray(prevImageUrlArray => [
                ...prevImageUrlArray,
                ...filteredImageUrls
            ])
            return imageUrlArray
        } catch (error: any) {
            console.error(error)
        }
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const onClickingTon = event => {
        event.preventDefault()
        console.log(event.target.src)
        setImgSrc(event.target.src)
        handleClickOpen()
    }

    useEffect(() => {
        getInitialImages()
    }, [])

    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <img
                    src={imageSrc}
                    srcSet={imageSrc}
                    alt={imageSrc}
                    loading="lazy"
                    onClick={() => onClickingTon(event)}
                />
            </Dialog>

            <ImageList cols={5} gap={8}>
                {imageUrlArray?.map(item => (
                    <ImageListItem key={item}>
                        <img
                            src={item}
                            srcSet={item}
                            alt={item}
                            loading="lazy"
                            onClick={() => onClickingTon(event)}
                            style={{ cursor: 'pointer' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <button onClick={() => getNextImages()}> Load More</button>
        </>
    )
}

export default GalleryPage
