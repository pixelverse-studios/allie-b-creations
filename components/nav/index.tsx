import { useState, useEffect } from 'react'

import useBreakpoint from '@/utils/hooks/useWindowWidth'

const Nav = () => {
    const { isMobile } = useBreakpoint()
    // useEffect(() => {}, [])

    if (isMobile) {
        return <nav>mobile nav goes here</nav>
    }

    return <nav>regular nav goes here</nav>
}

export default Nav
