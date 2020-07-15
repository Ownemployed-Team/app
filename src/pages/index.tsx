import { Hero, Actions, Initiative, Skills, Reasons, CallToAction} from 'components/home'
import Layout from 'components/layout/Layout'

const Home = () => {
    return (
        <Layout boxed={false}>
            <Hero />
            <Actions />
            <Skills />
            <Reasons />
            <Initiative />
        </Layout>
    )
}

export default Home