import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from './components/carousel'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { ArrowForward } from '@mui/icons-material'
import Balloon from './assets/balloon.jpeg'
import {
    PrimaryHero,
    SecondaryHero,
    StyledHomePage,
    StyledGalleryContainer,
    StyledGalleryButton
} from './StyledHomePage'

const HomePage = () => {
    const homePageData = useSelector((state: any) => state.homePage)
    const parallax = useRef<IParallax>(null!)

    return (
        <StyledHomePage>
            <PrimaryHero backgroundUrl={homePageData[0]?.img.src}>
                <h1 className="title">{homePageData[0]?.heroBanner}</h1>
            </PrimaryHero>
            <div className="carousel">
                <Carousel />
            </div>
            <SecondaryHero backgroundUrl={homePageData[1]?.img.src}>
                <StyledGalleryContainer>
                    <h2 className="header">Gallery</h2>
                    <img src={Balloon.src} alt="balloons" className="image" />
                    <div className="quote">
                        <p>Unforgettable</p>
                        <p>Moments</p>
                    </div>
                    <StyledGalleryButton>
                        <ArrowForward />
                    </StyledGalleryButton>
                </StyledGalleryContainer>
            </SecondaryHero>
        </StyledHomePage>
    )
}

export default HomePage
