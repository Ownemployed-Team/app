import Link from 'next/link'
import Layout from 'components/layout/Layout'
import Card from 'components/common/Card'
import { Box, Flex, Image, Heading } from 'rebass'
import { Project } from 'lib/generated/graphql'
import Text from 'components/common/Text'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_PROJECT from 'lib/graphql/get-project'
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

    // if (!userId) {
    //     return <Loading></Loading>
    // }

    if (loading && called) {
        return <Loading></Loading>
    }

    const project: Project = data?.getProject ?? {}
    const { name } = project

    //const canEdit = project.owner.id === userId
    const canEdit = true

    return (
        <Layout title="Explore | Ownemployed">
            <Box>
                <ProjectDetails project={project} />
            </Box>
            <Flex>
                <ProjectSummary project={project} />
                <ProjectMembers project={project} />
            </Flex>
        </Layout>
    )
}

export default ProjectProfile

function ProjectDetails({ project }: { project: Project }) {
    const { name, description, tags = [{ title: 'test tag' }] } = project

    return (
        <Box display={['block', 'block', 'flex']}>
            <Box width={[1, 1, 2 / 3]}>
                <Card
                    sx={{
                        borderRadius: 2,
                        m: 2,
                        p: 0,
                    }}
                >
                    <Box
                        sx={{
                            p: 4,
                        }}
                    >
                        <Text as="h2">{name}</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim ...
                        </Text>
                        <Box
                            sx={{
                                pb: 2,
                            }}
                        >
                            {tags &&
                                tags.map(({ title }, tagIndex) => (
                                    <Text
                                        key={tagIndex}
                                        sx={{
                                            mr: 1,
                                            p: 2,
                                            borderRadius: '2px',
                                            display: 'inline',
                                            bg: '#124780',
                                            color: 'white',
                                            fontSize: '10px',
                                        }}
                                    >
                                        {title}
                                    </Text>
                                ))}
                        </Box>
                    </Box>
                </Card>
            </Box>
            <Box width={[1, 1, 1 / 3]}>
                <Card
                    sx={{
                        borderRadius: 2,
                        m: 2,
                        p: 0,
                    }}
                >
                    <Box
                        sx={{
                            borderBottom: '1px solid',
                            p: 2,
                        }}
                    >
                        <Text
                            sx={{
                                color: '#124780',
                            }}
                        >
                            Something
                        </Text>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

function ProjectSummary({ project }: { project: Project }) {
    const { name, description, tags = [{ title: 'test tag' }] } = project

    return (
        <Box width={[1, 1, 2 / 3]}>
            <Card
                sx={{
                    borderRadius: 2,
                    m: 2,
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        borderBottom: '1px solid',
                        p: 4,
                        pb: 3,
                    }}
                >
                    <Text
                        sx={{
                            color: '#124780',
                        }}
                    >
                        About the project
                    </Text>
                </Box>
                <Box
                    sx={{
                        p: 4,
                    }}
                >
                    <Box
                        sx={{
                            my: 2,
                        }}
                    >
                        <Text as="h3">Description</Text>
                        <Text>{description}</Text>
                    </Box>
                    <Box
                        sx={{
                            my: 4,
                        }}
                    >
                        <Text as="h3">Project status</Text>
                        <Text>{status}</Text>
                    </Box>
                    <Box
                        sx={{
                            my: 4,
                        }}
                    >
                        <Text as="h3">Useful Links</Text>
                        <Text>{'Need data from Daniel'}</Text>
                    </Box>
                    <Box
                        sx={{
                            my: 4,
                        }}
                    >
                        <Text as="h3">Skills needed</Text>
                        <Text>{'Need data from Daniel'}</Text>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

function ProjectMembers({ project }: { project: Project }) {
    return (
        <Box width={[1, 1, 1 / 3]}>
            <Card
                sx={{
                    borderRadius: 2,
                    m: 2,
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        borderBottom: '1px solid',
                        p: 4,
                        pb: 3,
                    }}
                >
                    <Text
                        sx={{
                            color: '#124780',
                        }}
                    >
                        Team Members
                    </Text>
                </Box>
                <Box
                    sx={{
                        p: 4,
                    }}
                >
                    <Flex flexWrap="wrap">
                        {[1, 2, 3, 4].map((item, idx) => (
                            <Box key={idx} width={[1 / 2]} sx={{ my: 2 }}>
                                <Image src="/imgs/illustrations/mentor.svg"></Image>
                                <Text
                                    as="body"
                                    sx={{ textAlign: 'center' }}
                                >
                                    title
                                </Text>
                                <Text sx={{ textAlign: 'center' }}>
                                    First name Last name
                                </Text>
                                <Flex
                                    sx={{
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <Box>
                                        <Image
                                            width="30px"
                                            src="/imgs/social-media/linkedin.svg"
                                        ></Image>
                                    </Box>
                                    <Box>
                                        <Image
                                            width="30px"
                                            src="/imgs/social-media/facebook.svg"
                                        ></Image>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Card>
        </Box>
    )
}
