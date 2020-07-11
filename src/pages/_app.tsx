// import App from 'next/app'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from 'hooks/useApollo'
import { Auth0Provider } from '@auth0/auth0-react'
import theme from 'config/theme'
import { useState } from 'react'
import { Member } from 'generated/graphql'
import { ThemeProvider } from 'emotion-theming'

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
    const [user, setUser] = useState<Member>()

    const apolloClient = useApollo(pageProps.initialApolloState)

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
                    <Component {...pageProps} />
                </ThemeProvider>
            </Auth0Provider>
        </ApolloProvider>
    )
}

export default App
