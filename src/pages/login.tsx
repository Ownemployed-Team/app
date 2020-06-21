import Link from 'next/link'
import Layout from 'components/Layout'

const LoginPage = () => (
    <Layout title="Ownemployed | Login">
        <h1>Log In 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
)

export default LoginPage
