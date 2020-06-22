export const auth0Config = {
    audience: process.env.AUTH0_AUDIENCE,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    redirectUri: process.env.REDIRECT_URI,
}

export const sentryConfig = {
    version: process.env.VERSION,
    dsn: process.env.SENTRY_DSN,
}

export const cloudinaryConfig = {
    cloudinaryAPIKey: process.env.CLOUDINARY_API_KEY ?? '',
    cloudinaryAPISecret: process.env.CLOUDINARY_API_SECRET ?? '',
    cloudinaryAPIEndpoint: process.env.CLOUDINARY_API_URL ?? '',
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME ?? '',
}

export default {
    auth0Config,
    sentryConfig,
    cloudinaryConfig,
}

const debug = process.env.REACT_APP_DEBUG || true
const apiURL = process.env.REACT_APP_API_URL || 'localhost:8080/api/v1'
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN || ''
const auth0Audience = process.env.REACT_APP_AUTH0_AUDIENCE || ''
const auth0ClientID = process.env.REACT_APP_AUTH0_CLIENT_ID || ''
//const cloudinaryCloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || ''
//const cloudinaryAPIKey = process.env.REACT_APP_CLOUDINARY_API_KEY || ''
//const cloudinaryAPISecret = process.env.REACT_APP_CLOUDINARY_API_SECRET || ''
//const cloudinaryAPIEndpoint = process.env.REACT_APP_CLOUDINARY_API_URL || ''

//export default {
//    debug,
//    apiURL,
//    auth0Domain,
//    auth0Audience,
//    auth0ClientID,
//    cloudinaryCloudName,
//    cloudinaryAPIKey,
//    cloudinaryAPISecret,
//    cloudinaryAPIEndpoint,
//}
