import Link from 'next/link'
import Layout from 'components/layout/Layout'

const Projects = ({ projects }) => (
    <Layout title="Ownemployed | About">
        <h1>Projects</h1>
        <ul>
            {projects.map(project => {
                return (
                    <li>
                        <Link href="[id]">
                            <a>{projects.name}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </Layout>
)

export default Projects
