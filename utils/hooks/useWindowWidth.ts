import { useState, useEffect } from 'react'

const MOBILE_WIDTH = 1000
const useBreakpoint = () => {
    const [pageWidth, setPageWidth] = useState<number>(0)

    useEffect(() => {
        function handleResize() {
            setPageWidth(window?.innerWidth)
        }

        if (typeof window === 'undefined') return
        window?.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return { pageWidth, isMobile: pageWidth <= MOBILE_WIDTH }
}

export default useBreakpoint
