import React from 'react'
import Link from 'next/link'
import { Link as RebassLink } from 'rebass'
import { Box, Flex } from 'rebass'
import MemberCard from 'components/members/MemberCard'

const MembersList = ({ members }) => {
    return (
        <Flex flexWrap="wrap">
            {members.map((member, index) => (
                <Link href={`/members/${member.id}`} key={index}>
                    <RebassLink
                        mr="auto"
                        width={[1, 1 / 2, 1 / 4]}
                        px={2}
                        py={3}
                    >
                        <Box key={index}>
                            <MemberCard user={member} />
                        </Box>
                    </RebassLink>
                </Link>
            ))}
        </Flex>
    )
}

export default MembersList
