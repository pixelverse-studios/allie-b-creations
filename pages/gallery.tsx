import { Dialog, ImageList, ImageListItem } from '@mui/material'

import { useEffect, useState } from 'react'

export default function GalleryPage() {
    const [imageUrlArray, setImageUrlArray] = useState([])
    const [imageSrc, setImgSrc] = useState('')
    const [open, setOpen] = useState(false)
    const [nextImageSetUrl, setNextImageSetUrl] = useState('')
    const getThis = async () => {
        const url = ` https://graph.instagram.com/me/media?fields=id,media_url,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_IG_SECRET}`
        try {
            const data = await fetch(url)
            const feed = await data.json()
            console.log('feed :>> ', feed)
            const imageUrls = feed.data.map(
                (item: { media_url: any }) => item.media_url
            )
            if (feed.paging.next) {
                setNextImageSetUrl(feed.paging.next)
            }
            setImageUrlArray(imageUrls)
        } catch (error: any) {
            console.error(error.message)
        }
    }

    // Function for 25+ images
    // const getThis = async () => {
    //     const url = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_IG_SECRET}`
    //     let allMediaUrls = []

    //     const fetchData = async nextUrl => {
    //         try {
    //             const response = await fetch(nextUrl || url)
    //             const feed = await response.json()
    //             const mediaUrls = feed.data.map(item => item.media_url)
    //             allMediaUrls = allMediaUrls.concat(mediaUrls)

    //             if (feed.paging && feed.paging.next) {
    //                 // Fetch next page if available
    //                 await fetchData(feed.paging.next)
    //             } else {
    //                 // All pages fetched, log the final result
    //                 setImageUrls(allMediaUrls)
    //             }
    //         } catch (error) {
    //             console.error(error.message)
    //         }
    //     }

    //     await fetchData()
    // }\

    const onHelpMeGod = async () => {
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
        } catch (error: any) {
            console.error(error.message)
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
        getThis()
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

            <ImageList variant="masonry" cols={4} gap={8}>
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
            <button onClick={() => onHelpMeGod()}> Load More</button>
        </>
    )
}
