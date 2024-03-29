import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Carousel } from './components/carousel'
import { ArrowForward } from '@mui/icons-material'
import Balloon from './assets/balloon.jpeg'
import { ZoomIn } from '@/components/animator'
import {
    PrimaryHero,
    SecondaryHero,
    StyledHomePage,
    StyledGalleryContainer,
    StyledGalleryButton
} from './StyledHomePage'

const HomePage = () => {
    const router = useRouter()
    const homePageData = useSelector((state: any) => state.homePage)

    return (
        <StyledHomePage>
            <ZoomIn duration={750}>
                <PrimaryHero backgroundUrl={homePageData[0]?.img.src}>
                    <h1 className="title">{homePageData[0]?.heroBanner}</h1>
                </PrimaryHero>
            </ZoomIn>
            <ZoomIn duration={750}>
                <Carousel />
            </ZoomIn>
            <ZoomIn duration={750}>
                <SecondaryHero>
                    <img
                        className="hero"
                        src={homePageData[1]?.img.src}
                        alt="secondaryHomePageHeroImg"
                    />
                    <StyledGalleryContainer>
                        <h2 className="header">Gallery</h2>
                        <img
                            src={Balloon.src}
                            alt="balloons"
                            className="image"
                        />
                        <div className="quote">
                            <p>Unforgettable</p>
                            <p>Moments</p>
                        </div>
                        <StyledGalleryButton
                            onClick={() => router.push('/gallery')}>
                            <ArrowForward />
                        </StyledGalleryButton>
                    </StyledGalleryContainer>
                </SecondaryHero>
            </ZoomIn>
        </StyledHomePage>
    )
}

export default HomePage
