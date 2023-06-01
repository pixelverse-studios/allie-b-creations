import { StyledCallToAction } from './StyledCallToAction'

import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import RateReviewIcon from '@mui/icons-material/RateReview'
import MessageIcon from '@mui/icons-material/Message'

const SpeedDialOptions = [
    { icon: <MessageIcon />, name: 'Contact Me' },
    { icon: <RateReviewIcon />, name: 'Create a Testimonial' }
]
const CallToActionButton = () => {
    return (
        <StyledCallToAction>
            <SpeedDial
                ariaLabel="SpeedDial CTA"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20
                }}
                icon={<SpeedDialIcon />}>
                {SpeedDialOptions.map(option => (
                    <SpeedDialAction
                        key={option.name}
                        icon={option.icon}
                        tooltipTitle={option.name}
                    />
                ))}
            </SpeedDial>
        </StyledCallToAction>
    )
}

export default CallToActionButton
