import { useEffect, useState } from 'react'
import {
    SpeedDial as MuiSpeedDial,
    SpeedDialIcon,
    SpeedDialAction
} from '@mui/material'
import {
    RateReview,
    Message,
    BubbleChart,
    AutoAwesome
} from '@mui/icons-material'

import { showDrawer } from '@/lib/redux/slices/drawer'
import { useDispatch } from 'react-redux'
import { SpeedDialProps } from '@/utils/types/components/speed-dial'
import { DRAWER_TYPES } from '@/utils/constants'
import { StyledSpeedDial } from './StyledSpeedDial'

const animationClass = 'pulse'
const animateDuration = 6500
const animateDelay = 60000

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
    const [animation, setAnimation] = useState(animationClass)

    useEffect(() => {
        const removeAnimation = () =>
            setTimeout(() => {
                setAnimation('')
                addAnimation()
            }, animateDuration)
        const addAnimation = () => {
            setTimeout(() => {
                setAnimation(animationClass)
            }, animateDelay)
        }
        removeAnimation()
    }, [])

    const onDrawerToggle = (content: string, title: string) =>
        dispatch(showDrawer({ content, title }))

    return (
        <StyledSpeedDial>
            <MuiSpeedDial
                ariaLabel="SpeedDial CTA"
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 40
                }}
                FabProps={{ className: animation }}
                icon={
                    <SpeedDialIcon
                        icon={<AutoAwesome />}
                        openIcon={<BubbleChart />}
                    />
                }>
                {SpeedDialOptions.map(option => (
                    <SpeedDialAction
                        className="speeddialButton"
                        onClick={() =>
                            onDrawerToggle(option.content, option.label)
                        }
                        tooltipOpen
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
