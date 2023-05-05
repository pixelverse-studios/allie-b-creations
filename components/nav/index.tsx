import { useState, useEffect } from 'react'

import useBreakpoint from '@/utils/hooks/useWindowWidth'
import DesktopNav from './DesktopNav'

const Nav = () => {
    const { isMobile } = useBreakpoint()
    // useEffect(() => {}, [])

    if (isMobile) {
        return <nav>mobile nav goes here</nav>
    }

    return <DesktopNav />
}

export default Nav
