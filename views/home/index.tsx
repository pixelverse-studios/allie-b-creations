import { useSelector } from 'react-redux'
import { Carousel } from './components/carousel'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import StyledHomePage, { PrimaryHero, SecondaryHero } from './StyledHomePage'
import { useRef } from 'react'

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
                <div className="gallery-block">
                    <h2>Gallery</h2>
                </div>
            </SecondaryHero>
        </StyledHomePage>
    )
}

export default HomePage
