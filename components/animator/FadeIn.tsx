import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from '@react-spring/web'
import { DELAY } from '.'

const FadeIn = ({
    children,
    duration
}: {
    children: any
    duration: number
}) => {
    const [inView, setInview] = useState(false)

    const transition = useSpring({
        delay: DELAY,
        config: { duration },
        to: {
            opacity: !inView ? 0 : 1
        }
    })
    return (
        <Waypoint onEnter={() => setInview(true)}>
            <animated.div style={transition}>{children}</animated.div>
        </Waypoint>
    )
}

export default FadeIn
