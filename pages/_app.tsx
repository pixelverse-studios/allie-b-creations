import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import AuthWrapper from '@/components/auth'
import { store } from '@/lib/redux/store'
import FormDrawer from '@/components/drawer'
import styled from '@emotion/styled'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
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
                    <AnimatedDiv>
                        <Component {...pageProps} />
                    </AnimatedDiv>
                    <SnackbarProvider hideIconVariant />
                    <FormDrawer />
                </AuthWrapper>
            </ReduxProvider>
        </>
    )
}
