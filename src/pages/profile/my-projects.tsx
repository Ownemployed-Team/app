import { ComponentClass } from 'react'
import Link from 'next/link'
import { Flex, Box, Image } from 'rebass'
import { withRouter } from 'next/router'

import Text from 'components/common/Text'
import Button from 'components/common/Button'
import Layout from 'components/layout/Layout'
import ADD_PROJECT from 'graphql/add-project'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { NewProjectInput, Member, Project } from 'generated/graphql'
import GET_ME from 'graphql/get-me'
import { withAuth, withLoginRequired } from 'use-auth0-hooks'
import { useUserContext } from 'context/UserContext'
import GET_PROJECTS from 'graphql/get-projects'
import Projects from 'pages/projects'

export const MyProjects = ({ auth }) => {
    const { user }: { user: Member } = useUserContext()
    const { id } = user

    const result = useQuery(GET_PROJECTS, { variables: { owner: id }})

    const { loading, data, called } = result

    const projects: Project[] = data?.getProjects ?? []

    if (loading && called) {
        return <Layout>Loading...</Layout>
    }

    return (
        <Layout title="Ownemployed | Create Project">
            <Flex mx={-2} mt={3}>
                <Box width={1 / 2}>
                    <Text as="h2">Create Project Result</Text>
                </Box>

                <Box width={1 / 2}>
                    <Text as="h3">list</Text>
                    {
    projects.map((p, index) => {
            return <Box key={index}>{JSON.stringify(p)}</Box>

    })
    }
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
