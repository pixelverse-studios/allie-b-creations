import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import Head from 'next/head'

import AuthWrapper from '@/components/auth'
import { store } from '@/lib/redux/store'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Allie B Creations</title>
                <meta name="description" content="Allie B Creations" />
                <meta
                    name="viewport"
                    content="width=device-widthm initial-scale=1"
                />
                {/* <link rel="icon" href={Logo.src} /> */}
            </Head>
            <ReduxProvider store={store}>
                <AuthWrapper>
                    <Component {...pageProps} />
                </AuthWrapper>
            </ReduxProvider>
        </>
    )
}
