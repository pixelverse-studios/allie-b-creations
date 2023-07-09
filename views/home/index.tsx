import { useSelector } from 'react-redux'
import { Carousel } from './components/carousel'
import StyledHomePage from './StyledHomePage'

const HomePage = () => {
    const homePageData = useSelector((state: any) => state.homePage)
    console.log(homePageData[0])

    return (
        <StyledHomePage>
            <div className="primary-hero">
                <img src={homePageData[0]?.img.src} className="hero-image" />
                {/* <div className="overlay" /> */}
                <h1 className="title">{homePageData[0]?.heroBanner}</h1>
            </div>
            <div className="carousel">
                <Carousel />
            </div>
            <div className="secondary-hero">
                <img src={homePageData[1]?.img.src} className="hero-image" />
                <div className="gallery-block">
                    <h2></h2>
                </div>
            </div>
        </StyledHomePage>
    )
}

export default HomePage
