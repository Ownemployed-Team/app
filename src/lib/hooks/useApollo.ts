import { useMemo } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

let apolloClient

function createIsomorphLink() {
    const { HttpLink } = require('apollo-link-http')
    return new HttpLink({
        uri: process.env.API_URL,
    })
}

function createApolloClient() {
    return new ApolloClient({
        link: createIsomorphLink(),
        cache: new InMemoryCache(),
    })
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
        _apolloClient.cache.restore(initialState)
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') {
        return _apolloClient
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = _apolloClient
    }

    return _apolloClient
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}
