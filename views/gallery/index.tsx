import { useState } from 'react'
import { Dialog, ImageList, ImageListItem } from '@mui/material'
import { Clear } from '@mui/icons-material'
import HeaderWithPaintStreaks from '@/components/title/headerWithPaint'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import useBreakpoint from '@/utils/hooks/useWindowWidth'
import { ZoomIn } from '@/components/animator'
import { StyledGalleryPage } from './StyledGallery'

const GalleryPage = () => {
    const { images, tags } = useSelector((state: RootState) => state.gallery)
    const { isMobile } = useBreakpoint()
    const [activeFilter, setActiveFilter] = useState<string>('')

    const onFilterClick = (filter: string) => setActiveFilter(filter)
    const isBlankFilter = activeFilter === ''

    const galleryItems = isBlankFilter
        ? images
        : images?.filter(img => img.tags?.includes(activeFilter))

    return (
        <StyledGalleryPage>
            <ZoomIn duration={500}>
                <HeaderWithPaintStreaks title="Gallery" />
                <div className="filter">
                    {tags?.map(tag => (
                        <button
                            className={
                                tag === activeFilter ? 'active' : 'inactive'
                            }
                            onClick={() => onFilterClick(tag)}>
                            {tag}
                        </button>
                    ))}
                    {!isBlankFilter ? (
                        <button onClick={() => onFilterClick('')}>
                            <Clear />
                        </button>
                    ) : null}
                </div>
            </ZoomIn>
            <ImageList
                cols={isMobile ? 1 : 3}
                gap={isMobile ? 4 : 8}
                variant="masonry">
                {galleryItems?.map((image, index) => (
                    <ZoomIn key={`zoomIn${index}`} duration={500}>
                        <ImageListItem key={index}>
                            <img
                                key={image.src}
                                src={image.src}
                                srcSet={image.src}
                                alt={image.name}
                                loading="lazy"
                                style={{ cursor: 'pointer', borderRadius: 10 }}
                            />
                        </ImageListItem>
                    </ZoomIn>
                ))}
            </ImageList>
        </StyledGalleryPage>
    )
}

export default GalleryPage
