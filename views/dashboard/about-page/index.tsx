import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, ButtonGroup } from '@mui/material'
import FormView from './components/FormView'
import { StyledAboutWidget } from './StyledAboutWidget'

const AboutWidget = () => {
    const AboutPageData = useSelector((state: any) => state.aboutPage)
    const [formView, setFormView] = useState<boolean>(true)

    return (
        <StyledAboutWidget>
            <div className="header">
                <ButtonGroup
                    variant="text"
                    aria-label="text button group"
                    className="button-group">
                    <Button
                        sx={{ color: 'black' }}
                        onClick={() => setFormView(true)}>
                        ABOUT ME
                    </Button>
                    <Button
                        sx={{ color: 'black' }}
                        onClick={() => setFormView(false)}>
                        COMPANY STORY
                    </Button>
                </ButtonGroup>
            </div>
            <div className="form-view">
                <h3>{formView ? 'About Me' : 'Company Story'}</h3>
                <FormView
                    store={formView ? AboutPageData?.[0] : AboutPageData?.[1]}
                />
            </div>
        </StyledAboutWidget>
    )
}

export default AboutWidget
