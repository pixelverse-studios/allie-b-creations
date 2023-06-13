import { StyledSpeedDial } from './StyledSpeedDial'
import {
    SpeedDial as MuiSpeedDial,
    SpeedDialIcon,
    SpeedDialAction
} from '@mui/material'
import { RateReview, Message } from '@mui/icons-material'

import { showDrawer } from '@/lib/redux/slices/drawer'
import { useDispatch } from 'react-redux'
import { SpeedDialProps } from '@/utils/types/components/speed-dial'
import { DRAWER_TYPES } from '@/utils/constants'

const { TESTIMONIAL, CLIENT_REQUEST } = DRAWER_TYPES
const SpeedDialOptions: SpeedDialProps[] = [
    { icon: <Message />, label: 'Contact Me', content: CLIENT_REQUEST },
    {
        icon: <RateReview />,
        label: 'Create a Testimonial',
        content: TESTIMONIAL
    }
]
const SpeedDial = () => {
    const dispatch = useDispatch()

    const onDrawerToggle = (content: string, title: string) =>
        dispatch(showDrawer({ content, title }))

    return (
        <StyledSpeedDial>
            <MuiSpeedDial
                ariaLabel="SpeedDial CTA"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20
                }}
                icon={<SpeedDialIcon />}>
                {SpeedDialOptions.map(option => (
                    <SpeedDialAction
                        onClick={() =>
                            onDrawerToggle(option.content, option.label)
                        }
                        key={option.label}
                        icon={option.icon}
                        tooltipTitle={option.label}
                    />
                ))}
            </MuiSpeedDial>
        </StyledSpeedDial>
    )
}

export default SpeedDial
