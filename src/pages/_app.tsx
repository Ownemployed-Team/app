import dynamic from 'next/dynamic'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from 'lib/hooks/useApollo'
import { Auth0Provider } from '@auth0/auth0-react'
import theme from 'config/theme'
import { useEffect } from 'react'
import { ThemeProvider } from 'emotion-theming'
import 'nprogress/nprogress.css'

const TopProgressBar = dynamic(
    () => {
        return import('components/common/TopProgressBar')
    },
    { ssr: false }
)

const onRedirectCallback = appState => {
    if (appState && appState.returnTo) {
        Router.push('/profile')
        // Router.push({
        //     pathname: appState.returnTo.pathname,
        //     query: appState.returnTo.query,
        // })
    }
}

function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    useEffect(() => {
        console.log('user_id on _app', window.localStorage.getItem('user_id'))
    }, [])

    return (
        <ApolloProvider client={apolloClient}>
            <Auth0Provider
                domain={process.env.AUTH0_DOMAIN}
                clientId={process.env.AUTH0_CLIENT_ID}
                redirectUri={process.env.REDIRECT_URI}
                onRedirectCallback={onRedirectCallback}
                audience={process.env.API_AUDIENCE}
                scope="self:read"
            >
                <ThemeProvider theme={theme}>
                    <TopProgressBar />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Auth0Provider>
        </ApolloProvider>
    )
}

export default App
