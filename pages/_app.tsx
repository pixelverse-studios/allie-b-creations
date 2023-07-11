import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider as ReduxProvider } from 'react-redux'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'

import AuthWrapper from '@/components/auth'
import { store } from '@/lib/redux/store'

import BalloonLoader from '@/components/loader'

import FormDrawer from '@/components/drawer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null

        const handleRouteChangeStart = () => {
            setLoading(true)
            timer = setTimeout(() => setLoading(false), 1500)
        }

        const handleRouteChangeComplete = () => {
            clearTimeout(timer!)
            setLoading(false)
        }

        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeComplete)

        handleRouteChangeStart()

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeComplete)
            clearTimeout(timer!)
        }
    }, [router])

    return (
        <>
            <Head>
                <title>Allie B Creations</title>
                <meta name="description" content="Allie B Creations" />
                <meta
                    name="viewport"
                    content="width=device-widthm initial-scale=1"
                />
            </Head>
            <ReduxProvider store={store}>
                <AuthWrapper>
                    {loading ? <BalloonLoader /> : <Component {...pageProps} />}
                    <SnackbarProvider hideIconVariant />
                    <FormDrawer />
                </AuthWrapper>
            </ReduxProvider>
        </>
    )
}
