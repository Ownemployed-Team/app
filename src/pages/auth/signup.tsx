import Layout from 'components/layout/Layout'

export default function SignUp() {
    return (
        <Layout>
            <form id="signup">
                <fieldset>
                    <legend>Sign up</legend>
                    <p>
                        <input
                            type="email"
                            id="signup-email"
                            placeholder="Email"
                            required
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            id="signup-password"
                            placeholder="Password"
                            required
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            id="username"
                            placeholder="username"
                            required
                        />
                    </p>
                    <input type="submit" value="Sign up" />
                </fieldset>
            </form>
        </Layout>
    )
}
