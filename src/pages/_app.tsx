// import App from 'next/app'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from 'lib/client'

import { Auth0Provider } from 'use-auth0-hooks'
import { ThemeProvider } from 'emotion-theming'
import theme from 'config/theme'
import UserContext from 'context/UserContext'
import { useState, useEffect } from 'react'
import { getStoredUser } from 'lib/user/storage'
import { Member } from 'generated/graphql'

/**
 * Where to send the user after they have signed in.
 */
const onRedirectCallback = appState => {
    console.log('app state', appState)
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

    const [user, setUser] = useState<Member>()

    useEffect(() => {
        // TODO find alternatives to this hydration
        // Hydrates user from localstorage
        const found = getStoredUser()
        if (found) {
            setUser(found)
        }
    }, [])

    return (
        <ApolloProvider client={apolloClient}>
            <Auth0Provider
                domain={process.env.AUTH0_DOMAIN}
                clientId={process.env.AUTH0_CLIENT_ID}
                redirectUri={process.env.REDIRECT_URI}
                onRedirectCallback={onRedirectCallback}
            >
                <UserContext.Provider value={{ user, setUser }}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </UserContext.Provider>
            </Auth0Provider>
        </ApolloProvider>
    )
}

export default App
