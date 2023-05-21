import { useState, useEffect } from 'react'

import useBreakpoint from '@/utils/hooks/useWindowWidth'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Nav = () => {
    const { isMobile } = useBreakpoint()
    if (isMobile) {
        return <MobileNav />
    }

    return <DesktopNav />
}

export default Nav
