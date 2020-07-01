import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export function useAccessToken() {
    const [accessToken, setAccessToken] = useState(null)
    const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0()

    useEffect(() => {
        getAccessTokenWithPopup({
            audience: process.env.API_AUDIENCE,
            scope: 'self:read',
        })
            .then(token => {
                setAccessToken(token)
            })
            .catch(err => console.error(err))
    })

    return accessToken
}
