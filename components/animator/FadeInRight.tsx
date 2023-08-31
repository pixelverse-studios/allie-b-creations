import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from '@react-spring/web'
import { DELAY } from '.'

const FadeInRight = ({ children }: { children: any }) => {
    const [inView, setInview] = useState(false)

    const transition = useSpring({
        delay: DELAY,
        to: {
            transform: !inView ? `translateX(1500px)` : `translateX(0)`
        }
    })
    return (
        <Waypoint onEnter={() => setInview(true)}>
            <animated.div style={transition}>{children}</animated.div>
        </Waypoint>
    )
}

export default FadeInRight
