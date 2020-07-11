import Link from 'next/link'

import { Member } from 'generated/graphql'

import Layout from 'components/layout/Layout'
import { Box, Heading, Image } from 'rebass'
import Grid from 'components/common/Grid'
import Text from 'components/common/Text'
import Stack from 'components/common/Stack'
import Tag from 'components/common/Tag'
import { useRouter } from 'next/router'
import GET_MEMBER from 'graphql/get-member'
import { useQuery } from '@apollo/react-hooks'

function MemberProfile() {

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

    const {
        name,
        email,
        avatar,
        socialMedia,
        ownedProjects,
        tags,
    }: Member = getMember

    console.log(getMember)

    return (
        <Layout title="Members | Ownemployed">
            <Grid columns={[1, null, 2]}>
                <MemberDetails member={getMember} />
                <Stack>
                    <MemberSummary member={getMember} />
                    <MemberProjects member={getMember} />
                </Stack>
            </Grid>
        </Layout>
    )
}

export default MemberProfile

function MemberDetails({ member }: { member: Member }) {

    const { name, email } = member

    return (
        <Box bg="white" shadow="small"
            maxHeight={['100%', "80%"]}
        w={['100%', '80%']} mt={4} p={4}>
            <Stack>
                <Box p={3} textAlign="center">
                    <Image variant = 'avatar' borderRadius="100%" name={name} />
                    <Text>Member role</Text>
                    <Heading fontSize="h3">{name}</Heading>
                </Box>

                <Box>
                    <Heading fontSize="h5">LinkedIn</Heading>
                    <Text>Member role</Text>
                </Box>
                <Box>
                    <Heading fontSize="h5">Website</Heading>
                    <Text>Member role</Text>
                </Box>

                <Box>
                    <Heading fontSize="h5">Email</Heading>
    <Text>{email}</Text>
                </Box>
            </Stack>
        </Box>
    )
}

const TagBox = ({ item }: { item: any }) => {
    const tags = item.tags ?? [{ title: 'ipsum' }]
    return tags.map((p, index) => <Tag key={index}>{p.title}</Tag>)
}

function MemberSummary({ member }: { member: Member }) {

    const { bio } = member

    return (
        <Box bg="white" shadow="small" mt={4}>
            <Box p={3} borderBottom="1px">
                <Heading fontSize="h3">About</Heading>
            </Box>
            <Box p={3}>
                <Text>
                    {bio}
                </Text>
            </Box>

            <Box p={3}>
                <Heading fontSize="h5">Skills</Heading>
                <TagBox item={member} />
                <Text>description</Text>
            </Box>

            <Box p={3}>
                <Heading fontSize="h5">Sector</Heading>
                <TagBox item={member} />
                <Text>description</Text>
            </Box>
        </Box>
    )
}

function MemberProjects({ member }: { member: Member }) {
    return (
        <Box bg="white" shadow="small" mt={4} >
            <Box p={3} borderBottom="1px">
                <Heading fontSize="h3">Projects</Heading>
            </Box>
            <Box p={3}>
                <Text>description</Text>
                <Grid>lorem ipsum</Grid>
            </Box>
        </Box>
    )
}
