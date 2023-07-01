import { useState } from 'react'
import { AboutMeFormView, StoryFormView } from './components'

import { StyledAboutWidget } from './StyledAboutWidget'

const AboutWidget = () => {
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
                {formView ? <AboutMeFormView /> : <StoryFormView />}
            </div>
        </StyledAboutWidget>
    )
}

export default AboutWidget
