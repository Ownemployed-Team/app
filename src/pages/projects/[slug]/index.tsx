import Link from 'next/link'
import Layout from 'components/layout/Layout'
import { Flex, Box, Stack, Heading, Tag } from '@chakra-ui/core'
import Grid from 'components/common/Grid'
import { Project } from 'generated/graphql'
import Text from 'components/common/Text'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_PROJECT from 'graphql/get-project'
import Loading from 'components/layout/Loading'

function ProjectProfile() {

    const router = useRouter()
    const [ userId, setUserId ] = useState(null)
    const { slug } = router.query

    const result = useQuery(GET_PROJECT, {
        variables: {
            id: slug,
        },
    })

    const { loading, data, called } = result

    useEffect(() => {
        const id = window?.localStorage?.getItem('user_id')
        setUserId(id)
    }, [])



    if (!userId) {
        return <Loading></Loading>
    }

    if (loading && called) {
        return <Loading></Loading>
    }

    const project: Project = data?.getProject ?? {}
    const { name } = project

    const canEdit = project.owner.id === userId

    return (
        <Layout title="Explore | Ownemployed">
            <Grid columns={[1, 2]}>
                <ProjectDetails project={project} />
            </Grid>
            <Grid columns={[1, null, 2]}>
                <ProjectSummary project={project} />
                <ProjectMembers project={project} />
            </Grid>
        </Layout>
    )
}

export default ProjectProfile

function ProjectDetails({ project }: { project: Project }) {
    const { name, description, tags = [{ title: 'test tag' }] } = project

    const sectors = tags.map((p, index) => <Tag key={index}>{p.title}</Tag>)

    return (
        <Box
            mt={4}
            w={['100%', null, '100%']}
            bg="white"
            shadow="small"
            borderWidth="1px"
            borderRadius={3}
        >
            <Box p={3} borderBottom="1px">
                <Heading fontSize="h3">Project Name</Heading>
            </Box>
            <Box p={3}>
                <Text>description</Text>
                <Grid>lorem ipsum</Grid>
            </Box>
            <Box px={3} py={2}>
                {sectors}
            </Box>
            <Box px={3} py={2}>
                <Flex alignItems="center">
                    <Box as={FaMapMarkerAlt} size="22px" color="green.400" />
                    <Text>City, Country - Remote</Text>
                </Flex>
            </Box>
        </Box>
    )
}

function ProjectSummary({ project }: { project: Project }) {
    return (
        <Box
            mt={4}
            w={['100%', '50%', '100%']}
            bg="white"
            shadow="small"
            borderWidth="1px"
        >
            <Box p={3} borderBottom="1px">
                <Heading fontSize="h3">About the project</Heading>
            </Box>
            <Box p={3}>
                <Heading fontSize="h5">Project Status</Heading>
                <Text>description</Text>
            </Box>
            <Box p={3}>
                <Heading fontSize="h5">About the project</Heading>
                <Text>description</Text>
            </Box>

            <Box p={3}>
                <Heading fontSize="h5">Skills Required</Heading>
                <Text>description</Text>
            </Box>
        </Box>
    )
}

function ProjectMembers({ project }: { project: Project }) {
    return (
        <Box
            mt={4}
            w={['100%', '70%']}
            bg="white"
            shadow="small"
            borderWidth="1px"
            borderRadius={3}
        >
            <Box p={3} borderBottom="1px">
                <Heading fontSize="h3">Team members</Heading>
            </Box>
            <Box p={3}>
                <Text>description</Text>
                <Grid>lorem ipsum</Grid>
            </Box>
        </Box>
    )
}
