import Link from 'next/link'
import Layout from 'components/layout/Layout'
import Text from 'components/common/Text'
import { Box, Flex, Image, Card } from 'rebass'
import ProjectCard from 'components/projects/ProjectCard'

import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import GET_MEMBER from 'graphql/get-member'
import { Member, Tag } from 'generated/graphql'
import { useUserContext } from 'context/UserContext'

const MemberProfile = () => {
    const router = useRouter()

    const { slug } = router.query

    const result = useQuery(GET_MEMBER, {
        variables: {
            id: slug,
        },
    })

    const { loading, data, called } = result

    if (loading && called) {
        return <Layout>loading user details</Layout>
    }

    const {
        getMember,
        //: { name, email, socialMedia, education, ownedProjects },
    } = data

    const { name, email, socialMedia, ownedProjects, tags }: Member = getMember
    const { user } = useUserContext()

    console.log('user on context', user)

    return (
        <Layout title={`Account | ${name}`}>
            <Text as="h2">{name}</Text>
            <Flex mt={3}>
                <code>{JSON.stringify(getMember)}</code>
            </Flex>

            {/*
            <Box display={['block', 'block', 'flex']}>
                <Box width={[1, 1, 1 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
                        }}
                    >
                        <Box sx={{ p: 4, borderBottom: '1px solid' }}>
                            <Box sx={{ my: 2 }}>
                                <Box
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        margin: 'auto',
                                        background: 'black',
                                    }}
                                >
                                    <Image
                                        sx={{
                                            minWidth: '100%',
                                            minHeight: '100%',
                                            width: 'auto',
                                            height: 'auto',
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                        src="/imgs/illustrations/mentor.svg"
                                    />
                                </Box>
                                <Text as="body" sx={{ textAlign: 'center' }}>
                                    title
                                </Text>
                                <Text sx={{ textAlign: 'center' }}>{name}</Text>
                                <Text as="body" sx={{ textAlign: 'center' }}>
                                    {location}
                                </Text>
                            </Box>
                        </Box>

                        <SocialMediaBlock media={socialMedia} />
                    </Card>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
                        }}
                    >
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Text as="h3">Seeking</Text>
                            {lookingFor &&
                                lookingFor.map(lookingForItem => (
                                    <Text
                                        key={lookingForItem}
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
                                        {lookingForItem}
                                    </Text>
                                ))}
                        </Box>
                    </Card>
                </Box>
                <Box width={[1, 1, 2 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
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
                                About
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim ...
                            </Text>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Skills</Text>
                                {skills &&
                                    skills.map(skill => (
                                        <Text
                                            key={skill}
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
                                            {skill}
                                        </Text>
                                    ))}
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Sector</Text>
                                {lookingFor &&
                                    lookingFor.map(lookingForItem => (
                                        <Text
                                            key={lookingForItem}
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
                                            {lookingForItem}
                                        </Text>
                                    ))}
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="h3">Education</Text>
                                <Text as="body">{education}</Text>
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Interests</Text>
                                {interests &&
                                    interests.map(interest => (
                                        <Text
                                            key={interest}
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
                                            {interest}
                                        </Text>
                                    ))}
                            </Box>
                        </Box>
                    </Card>
                </Box>
                <ProjectsBlock projects={ownedProjects} />
            </Box>
*/}
        </Layout>
    )
}

export default MemberProfile

function TagsBlock({ tags }) {
    return (
        <Box>
            <Text as="body">Sector</Text>
            {tags &&
                tags.map((tag: Tag, index) => (
                    <Text
                        key={index}
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
                        {tag.title}
                    </Text>
                ))}
        </Box>
    )
}

function ProjectsBlock({ projects }) {
    return (
        <Card
            sx={{
                borderRadius: 2,
                p: 0,
                m: 4,
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
                    Projects
                </Text>
            </Box>
            <Box
                sx={{
                    p: 4,
                }}
            >
                <Flex flexWrap="wrap">
                    {projects &&
                        projects.map((project, index) => (
                            <Box
                                key={index}
                                width={[1 / 2]}
                                sx={{
                                    my: 2,
                                    p: 3,
                                }}
                            >
                                <ProjectCard project={project} />
                            </Box>
                        ))}
                </Flex>
            </Box>
        </Card>
    )
}

function SocialMediaBlock({ media }) {
    return (
        <Box sx={{ p: 4 }}>
            {media.map((media, index) => {
                const { title, url } = media
                return (
                    <Box sx={{ py: 2 }} key={index}>
                        <Text as="h3">{title}</Text>
                        <Text as="body">{url}</Text>
                    </Box>
                )
            })}
        </Box>
    )

    /*
        <Box sx={{ p: 4 }}>
            <Box sx={{ py: 2 }}>
                <Text as="h3">Website</Text>
                <Text as="body">{'website'}</Text>
            </Box>
            <Box sx={{ py: 2 }}>
                <Text as="h3">LinkedIn</Text>
                <Text as="body">{'linkedIn'}</Text>
            </Box>
            <Box sx={{ py: 2 }}>
                <Text as="h3">Facebook</Text>
                <Text as="body">{facebookUrl}</Text>
            </Box>
            <Box sx={{ py: 2 }}>
                <Text as="h3">Instagram</Text>
                <Text as="body">{instagramUrl}</Text>
            </Box>
            <Box sx={{ py: 2 }}>
                <Text as="h3">Email</Text>
                <Text as="body">{email}</Text>
            </Box>
            <Box sx={{ py: 4, textAlign: 'center' }}>
                <Button sx={{ width: '60%' }}>Connect</Button>
            </Box>
        </Box>
        */
}

/*
const MemberProfile = ({ match }) => {
    const memberProfileId = ''
    const result = useQuery(GET_USER, {
        variables: {
            userId: memberProfileId,
        },
    })
    const { loading, called, data = {} } = result
    const member = data.getUser || []

    if (called && loading) {
        return (
            <>
                <Text> Loading </Text>
            </>
        )
    }

    const {
        id,
        name,
        email,
        signupDate,
        socialMedia,
        interests,
        lookingFor,
        skills,
        education,
        location,
        projects,
    } = member
    // const owners = ownerIds
    //     .map(ownedId => users[ownedId])
    //     .filter(x => x !== undefined)
    // let image = require('static/imgs/businesses/default.jpg')
    // try {
    //     image = require(`static/imgs/businesses/${project.id}.png`)
    // } catch (e) {}
    // const linkRenderer = key =>
    //     '/projects?selected=' + encodeURIComponent(JSON.stringify([key]))

    const { url: facebookUrl } =
        (socialMedia || []).find(
            socialObject => socialObject.name === 'Facebook'
        ) || {}
    const { url: instagramUrl } =
        (socialMedia || []).find(
            socialObject => socialObject.name === 'Instagram'
        ) || {}
    return (
        <>
            <Box display={['block', 'block', 'flex']}>
                <Box width={[1, 1, 1 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
                        }}
                    >
                        <Box sx={{ p: 4, borderBottom: '1px solid' }}>
                            <Box sx={{ my: 2 }}>
                                <Box
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        margin: 'auto',
                                        background: 'black',
                                    }}
                                >
                                    <Image
                                        sx={{
                                            minWidth: '100%',
                                            minHeight: '100%',
                                            width: 'auto',
                                            height: 'auto',
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                        src="/imgs/illustrations/mentor.svg"
                                    />
                                </Box>
                                <Text as="body" sx={{ textAlign: 'center' }}>
                                    title
                                </Text>
                                <Text sx={{ textAlign: 'center' }}>{name}</Text>
                                <Text as="body" sx={{ textAlign: 'center' }}>
                                    {location}
                                </Text>
                            </Box>
                        </Box>
                        <Box sx={{ p: 4 }}>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Website</Text>
                                <Text as="body">{'website'}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">LinkedIn</Text>
                                <Text as="body">{'linkedIn'}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Facebook</Text>
                                <Text as="body">{facebookUrl}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Instagram</Text>
                                <Text as="body">{instagramUrl}</Text>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Text as="h3">Email</Text>
                                <Text as="body">{email}</Text>
                            </Box>
                            <Box sx={{ py: 4, textAlign: 'center' }}>
                                <Button sx={{ width: '60%' }}>Connect</Button>
                            </Box>
                        </Box>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
                        }}
                    >
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Text as="h3">Seeking</Text>
                            {lookingFor &&
                                lookingFor.map(lookingForItem => (
                                    <Text
                                        key={lookingForItem}
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
                                        {lookingForItem}
                                    </Text>
                                ))}
                        </Box>
                    </Card>
                </Box>
                <Box width={[1, 1, 2 / 3]}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
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
                                About
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim ...
                            </Text>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Skills</Text>
                                {skills &&
                                    skills.map(skill => (
                                        <Text
                                            key={skill}
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
                                            {skill}
                                        </Text>
                                    ))}
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Sector</Text>
                                {lookingFor &&
                                    lookingFor.map(lookingForItem => (
                                        <Text
                                            key={lookingForItem}
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
                                            {lookingForItem}
                                        </Text>
                                    ))}
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="h3">Education</Text>
                                <Text as="body">{education}</Text>
                            </Box>
                            <Box
                                sx={{
                                    py: 2,
                                }}
                            >
                                <Text as="body">Interests</Text>
                                {interests &&
                                    interests.map(interest => (
                                        <Text
                                            key={interest}
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
                                            {interest}
                                        </Text>
                                    ))}
                            </Box>
                        </Box>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            m: 4,
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
                                Projects
                            </Text>
                        </Box>
                        <Box
                            sx={{
                                p: 4,
                            }}
                        >
                            <Flex flexWrap="wrap">
                                {projects &&
                                    projects.map(project => (
                                        <Box
                                            width={[1 / 2]}
                                            sx={{
                                                my: 2,
                                                p: 3,
                                            }}
                                        >
                                            <ProjectCard project={project} />
                                        </Box>
                                    ))}
                            </Flex>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default MemberProfile
*/
