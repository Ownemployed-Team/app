// import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from 'lib/client'

import { Auth0Provider } from 'use-auth0-hooks'
import { ThemeProvider } from 'emotion-theming'
import theme from 'config/theme'

function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Auth0Provider
                domain={process.env.AUTH0_DOMAIN}
                clientId={process.env.AUTH0_CLIENT_ID}
                redirectUri={process.env.REDIRECT_URI}
            >
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Auth0Provider>
        </ApolloProvider>
    )
}

export default App
