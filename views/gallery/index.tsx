import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dialog, ImageList, ImageListItem } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { getNextImages } from '@/lib/db/cms/gallery-page'
import { setGallery } from '@/lib/redux/slices/gallery'
import isImgUrl from '@/utils/validations/image'

const GalleryPage = () => {
    const dispatch = useDispatch()
    const [imageSrc, setImgSrc] = useState({
        url: '',
        caption: ''
    })
    const [open, setOpen] = useState(false)
    const data = useSelector((state: RootState) => state.gallery)
    const { images } = data

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const onOpenDialog = (url: string, caption: string) => {
        setImgSrc({
            url,
            caption
        })
        handleClickOpen()
    }

    const onLoadMoreImage = async () => {
        const nextImageSet = await getNextImages(data)
        if (nextImageSet) dispatch(setGallery(nextImageSet))
    }

    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <img
                    src={imageSrc.url}
                    srcSet={imageSrc.url}
                    alt={imageSrc.url}
                    loading="lazy"
                />
                {imageSrc.caption}
            </Dialog>

            <ImageList cols={5} gap={8}>
                {images?.map((image, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={image.media_url}
                            srcSet={image.media_url}
                            alt={image.caption}
                            loading="lazy"
                            onClick={() =>
                                onOpenDialog(image.media_url, image.caption)
                            }
                            style={{ cursor: 'pointer' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <button onClick={() => onLoadMoreImage()}>Load More</button>
        </>
    )
}

export default GalleryPage
