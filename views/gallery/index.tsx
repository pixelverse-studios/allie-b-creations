import { useState } from 'react'
import { Dialog, ImageList, ImageListItem } from '@mui/material'
import { Clear } from '@mui/icons-material'
import HeaderWithPaintStreaks from '@/components/title/headerWithPaint'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import useBreakpoint from '@/utils/hooks/useWindowWidth'
import { StyledGalleryPage } from './StyledGallery'

const GalleryPage = () => {
    const { images, tags } = useSelector((state: RootState) => state.gallery)
    const { isMobile } = useBreakpoint()
    const [activeFilter, setActiveFilter] = useState<string>('')

    const onFilterClick = (filter: string) => setActiveFilter(filter)

    return (
        <StyledGalleryPage>
            <HeaderWithPaintStreaks title="Gallery" />
            <div className="filter">
                {tags?.map(tag => (
                    <button
                        className={tag === activeFilter ? 'active' : 'inactive'}
                        onClick={() => onFilterClick(tag)}>
                        {tag}
                    </button>
                ))}
                <button onClick={() => onFilterClick('')}>
                    <Clear />
                </button>
            </div>
            <ImageList
                cols={isMobile ? 2 : 3}
                gap={isMobile ? 4 : 8}
                variant="masonry">
                {images
                    ?.filter(img =>
                        activeFilter === ''
                            ? img.tags
                            : img.tags?.includes(activeFilter)
                    )
                    .map((image, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={image.src}
                                srcSet={image.src}
                                alt={image.name}
                                loading="lazy"
                                style={{ cursor: 'pointer', borderRadius: 10 }}
                            />
                        </ImageListItem>
                    ))}
            </ImageList>
        </StyledGalleryPage>
    )
}

export default GalleryPage
