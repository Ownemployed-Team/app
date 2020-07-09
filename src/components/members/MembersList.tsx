import React from 'react'
import Link from 'components/common/Link'
//import MemberCard from 'components/members/MemberCard'
import { Box, Image, Card, Heading, Text } from 'rebass'
import { Member } from 'lib/generated/graphql'
import { Gallery } from 'components/layout/Gallery'

const MembersList = ({ members }: { members: Member[] }) => {
    const list = members.map((member, index) => (
        <MemberCard member={member} key={index} />
    ))
    return <Gallery items={list} />
}

export default MembersList

const fillIn = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio sint porro vel necessitatibus unde repellendus quos molestiae. Deserunt iusto non amet enim maxime laudantium sed iste quas possimus quaerat!'


function MemberCard({ member }: { member: Member }) {
    const { id, name, avatar, bio } = member
    return (
        <Link href={`/members/${id}`}>
            <Card variant="card.secondary" height="100%">
                <Image src={avatar ?? ''} variant="avatar" />
                <Box p={3}>
                    <Heading>{name}</Heading>
                    <Text>{bio ?? fillIn}</Text>
                </Box>
            </Card>
        </Link>
    )
}
