import { ComponentClass, FunctionComponent } from 'react'
import Link from 'next/link'
import { Flex, Box, Card } from 'rebass'
import Text from 'components/common/Text'
import Layout from 'components/layout/Layout'
import { useQuery } from '@apollo/react-hooks'
import { Member, Project } from 'generated/graphql'
import { withAuth, withLoginRequired } from 'use-auth0-hooks'
import { useUserContext } from 'context/UserContext'
import GET_PROJECTS from 'graphql/get-projects'


const ProjectsList: FunctionComponent<{
    projects: Project[]
}> = ({ projects = [] }) => {
    return projects.map((p, index) => {
        return <Link href={`/projects/${p.id}`}>
        <a>
        <Card key={index}>{p?.name ?? ''}</Card>
        </a>
        </Link>
    })
}

export const MyProjects = ({ auth }) => {
    const { user }: { user: Member } = useUserContext()
    const { id } = user

    const result = useQuery(GET_PROJECTS, { variables: { owner: id }})

    const { loading, data, called } = result

    const projects: Project[] = data?.getProjects ?? []

    if (loading && called) {
        return <Layout>Loading...</Layout>
    }

    // TODO: filter this backend side
    const filtered = projects.filter(p => p.owner.id === id)

    return (
        <Layout title="Ownemployed | My Projects">
            <Flex mx={-2} mt={3}>
                <Box width={1 / 2}>
                    <Text as="h2">My Projects</Text>
                </Box>

                <Box width={1 / 2}>
                    <Text as="h3">list</Text>
                    <ProjectsList projects={filtered}/>
                </Box>
            </Flex>
        </Layout>
    )
}

const withAuthHOC = withAuth((MyProjects as unknown) as ComponentClass<
    any,
    any
>)

export default withLoginRequired((withAuthHOC as unknown) as ComponentClass<
    any,
    any
>)
