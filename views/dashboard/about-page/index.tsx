import { useState } from 'react'
import { useSelector } from 'react-redux'
import FormView from './components/FormView'
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
                    <FormView FormData={AboutPageData?.[0]} />
                ) : (
                    <FormView FormData={AboutPageData?.[1]} />
                )}
            </div>
        </StyledAboutWidget>
    )
}

export default AboutWidget
