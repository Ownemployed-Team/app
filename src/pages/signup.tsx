import Link from 'next/link'
import Layout from 'components/Layout'

const SignupPage = () => (
    <Layout title="Ownemployed | Sign up">
        <h1>Welcome to Ownemployed 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
)

export default SignupPage
