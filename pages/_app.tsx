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
import styled from '@emotion/styled'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const handleRouteChangeStart = () => setLoading(true)
    const handleRouteChangeComplete = () => setLoading(false)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500)

        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeComplete)
        handleRouteChangeStart()

        return () => {
            clearTimeout(timer)
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeComplete)
        }
    }, [router])

    const AnimatedDiv = styled.div`
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        animation: fadeIn 1s ease-in-out;
    `

    return (
        <>
            <Head>
                <title>Allie B Creations</title>
                <meta name="description" content="Allie B Creations" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <ReduxProvider store={store}>
                <AuthWrapper>
                    {loading ? (
                        <BalloonLoader />
                    ) : (
                        <AnimatedDiv>
                            <Component {...pageProps} />
                        </AnimatedDiv>
                    )}
                    <SnackbarProvider hideIconVariant />
                    <FormDrawer />
                </AuthWrapper>
            </ReduxProvider>
        </>
    )
}
