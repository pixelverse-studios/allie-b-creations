import { useSelector } from 'react-redux'
import { StyledAboutPage } from './StyledAboutPage'
import HeaderWithPaintStreaks from '@/components/title/headerWithPaint'
import QuoteSvg from './assets/QuoteSvg'
import { FadeInLeft, FadeInRight, ZoomIn } from '@/components/animator'
import { AboutPageProps } from '@/utils/types/redux'

const AboutPageView = () => {
    const aboutPageData = useSelector((state: any) => state.aboutPage)

    return (
        <StyledAboutPage id="aboutPage">
            <ZoomIn duration={750}>
                <HeaderWithPaintStreaks title="About Me" />
            </ZoomIn>
            {aboutPageData.map((data: AboutPageProps, index: number) => {
                const isTop = index === 0
                const ImgComponent = isTop ? FadeInLeft : FadeInRight
                const TextComponent = isTop ? FadeInRight : FadeInLeft

                return (
                    <div className={`image-about-content-${index}`} key={index}>
                        <ImgComponent>
                            <img
                                className="image"
                                src={data.img.src}
                                alt="alt text"
                            />
                        </ImgComponent>
                        <TextComponent>
                            <div className="about">
                                <div className="header-content">
                                    <div className="quote">
                                        <QuoteSvg />
                                    </div>
                                </div>
                                <div className="body-content">
                                    <h2 className="header">{data.header}</h2>
                                    {/* iGotYouOnTheNextLine */}
                                    <h2 className="subHeader">
                                        {data.subHeader}
                                    </h2>
                                    <div className="background-info-container">
                                        <p className="background-info">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="role-name-content">
                                    <span className="name">{data.name}</span>
                                    <span className="role">{data.role}</span>
                                </div>
                            </div>
                        </TextComponent>
                    </div>
                )
            })}
        </StyledAboutPage>
    )
}

export default AboutPageView
