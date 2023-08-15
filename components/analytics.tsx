import { memo, useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

const GoogleAnalytics = () => {
    const analyticsID = process?.env?.NEXT_PUBLIC_ANALYTICS_ID ?? null
    const router = useRouter()

    useEffect(() => {
        if (!analyticsID || router.isPreview) return
        gtag('config', analyticsID, {
            send_page_view: false
        })
        gtag('event', 'page_view', {
            page_path: window.location.pathname,
            send_to: analyticsID
        })
    }, [])

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            // console.log(url)
            if (!analyticsID || router.isPreview) return
            gtag('event', 'page_view', {
                page_path: url,
                send_to: analyticsID
            })
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        // router.events.on('hashChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            // router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events, router.isPreview])

    if (!analyticsID || router.isPreview) {
        return null
    }
    return (
        <div className="container">
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-4C241CNEDD"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "G-4C241CNEDD", {
            page_path: window.location.pathname,
          });
        `
                }}
            />
        </div>
    )
}

export default memo(GoogleAnalytics)
