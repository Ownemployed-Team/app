module.exports = {
    distDir: './dist',
    devIndicators: {
        autoPrerender: process.env.NODE_ENV !== 'production',
    },
    env: {
        API_URL: 'https://ownemployed-api.herokuapp.com/api/v1/graphql',
        API_AUDIENCE: 'https://ownemployed-api.herokuapp.com/api/v1/graphql',
        AUTH0_DOMAIN: 'ownemployed.eu.auth0.com',
        AUTH0_CLIENT_ID: 'LYA2dcwfZc04kqWuErSsWzW7qukLpQ3E',
        REDIRECT_URI: 'http://localhost:3000',
        POST_LOGOUT_REDIRECT_URI: 'http://localhost:3000',
    },
}
