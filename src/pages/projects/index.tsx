import Link from 'next/link'
import Layout from 'components/layout/Layout'

const Projects = () => (
    <Layout title="Ownemployed | Explore">
        <h1>Projects</h1>
        <ul>
            {[].map(project => {
                return (
                    <li>
                        <Link href="[id]">
                            <a>{project.name}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </Layout>
)

export default Projects
