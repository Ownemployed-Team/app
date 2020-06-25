module.exports = {
    distDir: './dist',
    devIndicators: {
        autoPrerender: process.env.NODE_ENV !== 'production',
    },
    env: {
        API_URL: process.env.API_URL,
        API_AUDIENCE: process.env.API_AUDIENCE,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URI,
        POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    },
}
