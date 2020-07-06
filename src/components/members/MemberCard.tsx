import React from 'react'
import Card from 'components/common/Card'
import Link from 'next/link'
import Text from 'components/common/Text'
import { Box, Image } from 'rebass'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Member } from 'generated/graphql'

export type User = {
    avatar: string
    education: string
    firstName: string
    headline: string
    id: number
    interests: any[]
    lastName: string
    location: string
    lookingFor: string[]
    signupDate: number
    skills: string[]
    socialMedia: any[]
    summary: string
}

function truncateValues(summary, location) {
    console.log(summary)
    console.log(location)
    if (summary && summary.length > 90)
        summary = summary.substring(0, 90).concat(' ...')
    if (location && location.length > 25)
        location = location.substring(0, 25).concat(' ...')
    return { summary: summary, location: location }
}

const MemberCard = ({
    user: {
        avatar,
        bio,
        id,
        headline,
        firstName,
        lastName,
        location,
        name,
        email,
    },
}: {
    user: Member
}) => {
    //TODO: Change the user type to fit the db
    let avatarUrl = avatar
        ? `https://res.cloudinary.com/demo/image/fetch/w_200,h_200,c_crop,g_face,r_max/w_200,f_png/${avatar}`
        : '/avatars/user/default.png'

    const {
        summary: truncatedSummary,
        location: truncatedLocation,
    } = truncateValues(bio, location)

    return (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image src={avatarUrl} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {/* <Badge rounded="full" px="2" variantColor="teal">
                        New
                    </Badge> */}
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        lorem ipsum
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {name}
                </Box>

                <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        {email}
                    </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    {truncatedSummary}
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    {truncatedLocation}
                </Box>
            </Box>
        </Box>
    )

    return (
        <Link href={`/members/${id}`}>
            <Card variant="secondary" sx={{ bg: 'white' }}>
                <Image src={avatarUrl} width={200} m={'auto'} p={4} />
                <Box
                    bg={'white'}
                    sx={{
                        minHeight: 235,
                        mx: 'auto',
                        p: 4,
                    }}
                >
                    <Text as="body" sx={{ textAlign: 'center' }}>
                        {headline}
                    </Text>
                    <Text
                        as="h1"
                        sx={{ fontSize: [16, 20, 20], textAlign: 'center' }}
                    >
                        {`${firstName} ${lastName}`}
                    </Text>
                    <Text as="body" sx={{ fontSize: 'card', height: '70px' }}>
                        {truncatedSummary ? truncatedSummary : 'No summary yet'}
                    </Text>
                    <Text
                        as="body"
                        sx={{
                            fontSize: 'card',
                            color: 'primary',
                            verticalAlign: 'bottom',
                        }}
                    >
                        <FaMapMarkerAlt style={{ marginRight: 2 }} />
                        {truncatedLocation ? truncatedLocation : 'Unknown'}
                    </Text>
                </Box>
            </Card>
        </Link>
    )
}

export default MemberCard
