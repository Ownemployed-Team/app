import { withAuth, withLoginRequired } from 'use-auth0-hooks'

import Layout from 'components/Layout'

function Settings({ auth }) {
    const { user } = auth
    return (
        <div>
            <h1>Profile</h1>
            <p>This is the profile page.</p>
            <pre>{JSON.stringify(user || {}, null, 2)}</pre>
        </div>
    )
}

export default withLoginRequired(withAuth(Settings))
