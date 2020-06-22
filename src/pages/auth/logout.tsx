import Link from 'next/link'
import Layout from 'components/layout/Layout'

const Logout = () => (
    <Layout title="Ownemployed | Logout">
        <h1>Logging you out 👋</h1>
        <p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </p>
    </Layout>
)

export default Logout
