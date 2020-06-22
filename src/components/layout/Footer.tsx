import React from 'react'
import { Box, Flex } from 'rebass'
//import Link from 'components/Link'
import Link from 'next/link'

import Text from 'components/common/Text'

export const Footer = ({ ...props }) => {
    return (
        <Flex
            p={3}
            mt={4}
            pl={[4, 4, 6]}
            pr={[4, 4, 6]}
            sx={{
                justifySelf: 'end',
                bg: 'white',
                color: 'muted',
                justifyContent: 'flex-start',
                fontFamily: 'body',
                width: '100%',
            }}
            {...props}
        >
            <Box mr={4}>
                <Text as="h3">Ownemployed</Text>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </Box>
            <Box mr={4}>
                <Text as="h3">Terms of use</Text>
                <Link href="/legal/terms-of-use">
                    <a>Terms of Use</a>
                </Link>
            </Box>
            <Box mr={4}>
                <Text as="h3">Privacy policy</Text>
                <Link href="/legal/privacy-policy">
                    <a>Privacy policy</a>
                </Link>
            </Box>
            <Box>
                <Text as="h3">Contact</Text>
                <Text sx={{ color: 'muted' }}>
                    <a href="mailto:ownemployed@gmail.com" />
                    ownemployed@gmail.com
                </Text>
            </Box>
        </Flex>
    )
}

export default Footer
