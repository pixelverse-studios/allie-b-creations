import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { useLoadScript } from '@react-google-maps/api'
import { enqueueSnackbar } from 'notistack'

import AuthWrapper from '@/components/auth'
import { store } from '@/lib/redux/store'

import FormDrawer from '@/components/drawer'
import '@/styles/globals.css'

const loadScriptDetails = {
    googleMapsApiKey: process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places']
}

export default function App({ Component, pageProps }: AppProps) {
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
                <title>Allie B Creations</title>
                <meta name="description" content="Allie B Creations" />
                <meta
                    name="viewport"
                    content="width=device-widthm initial-scale=1"
                />
            </Head>
            <ReduxProvider store={store}>
                <AuthWrapper>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Component {...pageProps} />
                        <SnackbarProvider hideIconVariant />
                        <FormDrawer />
                    </LocalizationProvider>
                </AuthWrapper>
            </ReduxProvider>
        </>
    )
}
