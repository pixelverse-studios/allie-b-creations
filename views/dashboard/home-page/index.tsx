import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ButtonGroup, Button } from '@mui/material'

import HeroForm from './components/HeroForm'
import { StyledHomePageWidget } from './StyledHomeWidget'

//Button Group and form header constants
const HERO = 'Primary Hero'
const SECONDARY_HERO = 'Gallery'

const HomePageWidget = () => {
    const HomePageData = useSelector((state: any) => state.homePage)
    const [formView, setFormView] = useState<boolean>(true)

    return (
        <StyledHomePageWidget>
            <div className="header">
                <h1>Home Page</h1>
                <ButtonGroup
                    variant="text"
                    aria-label="text button group"
                    className="button-group">
                    <Button
                        sx={{ color: 'black' }}
                        onClick={() => setFormView(true)}>
                        {HERO}
                    </Button>
                    <Button
                        sx={{ color: 'black' }}
                        onClick={() => setFormView(false)}>
                        {SECONDARY_HERO}
                    </Button>
                </ButtonGroup>
            </div>
            <div className="form-view">
                <h3>{formView ? HERO : SECONDARY_HERO}</h3>
                <HeroForm
                    store={formView ? HomePageData?.[0] : HomePageData?.[1]}
                />
            </div>
        </StyledHomePageWidget>
    )
}

export default HomePageWidget
