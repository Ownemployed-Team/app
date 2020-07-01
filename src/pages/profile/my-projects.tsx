import { ComponentClass, FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { Flex, Box, Card } from 'rebass'
import Text from 'components/common/Text'
import Layout from 'components/layout/Layout'
import { useQuery } from '@apollo/react-hooks'
import GET_PROJECTS from 'graphql/get-projects'
import ProjectsList from 'components/projects/ProjectsList'
import { withAuthenticationRequired } from '@auth0/auth0-react'

import { Project } from 'generated/graphql'
import { Skeleton } from '@chakra-ui/core'

export const MyProjects = () => {
    const userId = window.localStorage.getItem('user_id')
    const result = useQuery(GET_PROJECTS, { variables: { owner: userId } })

    const { loading, data, called } = result

     const projects: Project[] = data?.getProjects ?? []

     if (loading && called) {
         return <Layout>
             <Flex>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
             </Flex>
             </Layout>
     }

    // TODO: filter this backend side
    const filtered = projects.filter(p => p.owner.id === userId)

    return (
        <Layout title="Ownemployed | My Projects">
            <Flex px={4} mt={3} flexDirection="column">
                <Box mt={4}>
                    <Text as="h2">My Projects</Text>
                </Box>
                <Box mt={4}>
                    <ProjectsList projects={filtered} />
                </Box>
            </Flex>
        </Layout>
    )
}

export default withAuthenticationRequired(
    (MyProjects as unknown) as ComponentClass<any, any>
)
