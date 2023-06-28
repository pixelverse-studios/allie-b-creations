import { useSelector } from 'react-redux'
import { StyledAboutPage } from './StyledAboutPage'

const AboutPageView = () => {
    const aboutPageData = useSelector((state: any) => state.aboutPage)
    const { backgroundInfo, header, profileImg, role, subHeader, title } =
        aboutPageData

    return (
        <StyledAboutPage>
            <h1 className="header">{header}</h1>
            <div className="image-about-content">
                <img src={profileImg} alt="alt text" className="image" />
                <div className="about">h2</div>
            </div>
        </StyledAboutPage>
    )
}

export default AboutPageView
