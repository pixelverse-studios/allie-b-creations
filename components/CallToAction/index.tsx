import { StyledCallToAction } from './StyledCallToAction'

import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'

const CallToActionButton = () => {
    return (
        <StyledCallToAction>
            <SpeedDial
                ariaLabel="SpeedDial CTA"
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20
                }}
                icon={<SpeedDialIcon />}></SpeedDial>
        </StyledCallToAction>
    )
}

export default CallToActionButton
