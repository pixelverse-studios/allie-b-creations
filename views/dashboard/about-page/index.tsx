import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AboutMeFormView, StoryFormView } from './components'
import { FileUpload } from '@/components/form'
import { StyledAboutWidget } from './StyledAboutWidget'

const AboutWidget = () => {
    const AboutPageData = useSelector((state: any) => state.aboutPage)
    const [formView, setFormView] = useState<boolean>(true)

    const handleViewChange = () => {
        setFormView(!formView)
    }

    return (
        <StyledAboutWidget>
            <div className="header">
                <h3
                    className={`${formView && 'active'}`}
                    onClick={handleViewChange}>
                    About Me
                </h3>
                <span>/</span>
                <h3
                    className={`${!formView && 'active'}`}
                    onClick={handleViewChange}>
                    Company Story
                </h3>
            </div>
            <div className="form-view">
                {formView ? (
                    <AboutMeFormView FormData={AboutPageData?.[0]} />
                ) : (
                    <StoryFormView FormData={AboutPageData?.[1]} />
                )}
                <h6>Current Image</h6>
                {formView ? (
                    <>
                        <img
                            src={AboutPageData?.[0].profileImg}
                            alt="uploaded image"
                            className="upload-image"
                        />

                        {/* <FileUpload
                            context="serviceEvents"
                            files={}
                            label="Upload image"
                            multiple={false}
                            setFiles={onFilesChange}
                        /> */}
                    </>
                ) : (
                    <img
                        src={AboutPageData?.[1].profileImg}
                        alt="uploaded image"
                        className="upload-image"
                    />
                )}
            </div>
        </StyledAboutWidget>
    )
}

export default AboutWidget
