import { StyledCallToAction } from './StyledCallToAction'
import { useState } from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import RateReviewIcon from '@mui/icons-material/RateReview'
import MessageIcon from '@mui/icons-material/Message'
import { setDrawer } from '@/lib/redux/slices/drawer'
import { useDispatch, useSelector } from 'react-redux'
import { DrawerComponentProps } from '@/utils/types/redux'
interface SpeedDialProps {
    icon: any
    label: string
    drawerDisplay: 'message' | 'testimonial' | null
}

const SpeedDialOptions: SpeedDialProps[] = [
    { icon: <MessageIcon />, label: 'Contact Me', drawerDisplay: 'message' },
    {
        icon: <RateReviewIcon />,
        label: 'Create a Testimonial',
        drawerDisplay: 'testimonial'
    }
]
const CallToActionButton = () => {
    const dispatch = useDispatch()

    const drawerToggle = (
        drawerDisplay: 'message' | 'testimonial' | null,
        showDrawer: boolean
    ) => {
        dispatch(setDrawer({ drawerDisplay, showDrawer }))
    }
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
                        onClick={() => drawerToggle(option.drawerDisplay, true)}
                        key={option.label}
                        icon={option.icon}
                        tooltipTitle={option.label}
                    />
                ))}
            </SpeedDial>
        </StyledCallToAction>
    )
}

export default CallToActionButton
