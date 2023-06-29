import { useSelector } from 'react-redux'
import { StyledAboutPage } from './StyledAboutPage'
import HeaderWithPaintStreaks from '@/components/title/headerWithPaint'

const AboutPageView = () => {
    const aboutPageData = useSelector((state: any) => state.aboutPage)
    const { backgroundInfo, header, profileImg, role, subHeader, title } =
        aboutPageData

    return (
        <StyledAboutPage>
            <HeaderWithPaintStreaks title="About Me" />
            <div className="image-about-content">
                <img src={profileImg} alt="alt text" className="image" />
                <div className="about">
                    <div className="header-content">
                        <div className="header">
                            <svg
                                preserveAspectRatio="xMidYMid meet"
                                data-bbox="-0.02 -0.005 54.82 38.305"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-0.02 -0.005 54.82 38.305"
                                role="presentation"
                                aria-hidden="true">
                                <g>
                                    <path d="M2.1 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.4-.8-2.6-2.1-3.3-3.7C.3 16.4 0 14.5 0 12.7-.2 9.3 1.1 6 3.4 3.5 5.7 1.2 8.8-.1 12 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                                    <path d="M33.4 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.5-.9-2.6-2.2-3.3-3.8-.8-1.7-1.1-3.6-1.1-5.4-.2-3.4 1.1-6.7 3.4-9.2C37 1.2 40.1-.1 43.3 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="body-content">
                        <h2 className="subHeader">Making Dreams</h2>
                        <h2 className="subHeader">Come True</h2>
                        <div className="background-info-container">
                            <p className="background-info">
                                I'm a paragraph. Click here to add your own text
                                and edit me. It’s easy. Just click “Edit Text”
                                or double click me to add your own content and
                                make changes to the font.
                            </p>
                        </div>
                    </div>
                    <div className="role-content">
                        <span className="role">Allie B</span>
                        <span className="name">Founder</span>
                    </div>
                </div>
            </div>
            <div className="image-about-content">
                <div className="about">
                    <div className="header-content">
                        <div className="header">
                            <svg
                                preserveAspectRatio="xMidYMid meet"
                                data-bbox="-0.02 -0.005 54.82 38.305"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-0.02 -0.005 54.82 38.305"
                                role="presentation"
                                aria-hidden="true">
                                <g>
                                    <path d="M2.1 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.4-.8-2.6-2.1-3.3-3.7C.3 16.4 0 14.5 0 12.7-.2 9.3 1.1 6 3.4 3.5 5.7 1.2 8.8-.1 12 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                                    <path d="M33.4 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.5-.9-2.6-2.2-3.3-3.8-.8-1.7-1.1-3.6-1.1-5.4-.2-3.4 1.1-6.7 3.4-9.2C37 1.2 40.1-.1 43.3 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="body-content">
                        <h2 className="subHeader">Lets Get It</h2>
                        <h2 className="subHeader">Poppin</h2>
                        <div className="background-info-container">
                            <p className="background-info">
                                I'm a paragraph. Click here to add your own text
                                and edit me. It’s easy. Just click “Edit Text”
                                or double click me to add your own content and
                                make changes to the font.
                            </p>
                        </div>
                    </div>
                    <div className="role-content">
                        <span className="role">Blah blah</span>
                        <span className="name">bleh</span>
                    </div>
                </div>
                <img src={profileImg} alt="alt text" className="image" />
            </div>
            {/* <h1 className="title">{title}</h1>
            <div className="image-about-content">
                <img src={profileImg} alt="alt text" className="image" />
                <div className="about">
                    <h2 className="header">{header}</h2>
                    <h3 className="subHeader">{subHeader}</h3>
                    <div className="background-info-container">
                        {backgroundInfo.map((info: string) => (
                            <p className="background-info">{info}</p>
                        ))}
                    </div>
                    <span className="role">{role}</span>
                    <span className="name">The one and only</span>
                </div>
            </div> */}
        </StyledAboutPage>
    )
}

export default AboutPageView
