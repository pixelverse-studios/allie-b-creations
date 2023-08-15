import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider as ReduxProvider } from 'react-redux'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { useLoadScript } from '@react-google-maps/api'
import { enqueueSnackbar } from 'notistack'

import GoogleAnalytics from '@/components/analytics'
import AuthWrapper from '@/components/auth'
import { store } from '@/lib/redux/store'
import FormDrawer from '@/components/drawer'
import styled from '@emotion/styled'
import Logo from '../assets/Logo-Background.svg'
import '@/styles/globals.css'

const loadScriptDetails = {
    googleMapsApiKey: process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places']
}

export default function App({ Component, pageProps }: AppProps) {
    const [pageTitle, setPageTitle] = useState('')
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
    const { pathname } = useRouter()
    useEffect(() => {
        const page = pathname.split('/')[1]
        const title = page.charAt(0).toUpperCase() + page.slice(1)

        setPageTitle(`Allie B Creations ${title ? ` | ${title}` : ''}`)
    }, [pathname])

    const { loadError } = useLoadScript(loadScriptDetails as any)
    if (loadError) {
        enqueueSnackbar(
            'Google script failed to load, please refresh the page.',
            {
                variant: 'error'
            }
        )
    }
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Allie B Creations" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={Logo.src} />
            </Head>
            <ReduxProvider store={store}>
                <AuthWrapper>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <GoogleAnalytics />
                        <AnimatedDiv>
                            <Component {...pageProps} />
                        </AnimatedDiv>
                        <SnackbarProvider hideIconVariant />
                        <FormDrawer />
                    </LocalizationProvider>
                </AuthWrapper>
            </ReduxProvider>
        </>
    )
}
