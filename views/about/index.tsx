import { useSelector } from 'react-redux'
import { StyledAboutPage } from './StyledAboutPage'

const AboutPageView = () => {
    const aboutPageData = useSelector((state: any) => state.aboutPage)
    const { backgroundInfo, header, profileImg, role, subHeader, title } =
        aboutPageData
    console.log(aboutPageData)
    return (
        <StyledAboutPage>
            <h1 className="title">{title}</h1>
            <div className="image-about-content">
                <img src={profileImg} alt="alt text" className="image" />
                <div className="about">
                    <h2 className="header">{header}</h2>
                    <h3 className="subHeader">{subHeader}</h3>
                    <div>
                        {backgroundInfo.map((info: string) => (
                            <p className="background-info">{info}</p>
                        ))}
                    </div>
                    <span className="role">{role}</span>
                    <span className="name">The one and only</span>
                </div>
            </div>
        </StyledAboutPage>
    )
}

export default AboutPageView
