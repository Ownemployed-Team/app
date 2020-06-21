import React from 'react'
import Button from 'components/Button'
import Text from 'components/Text'
import Link from 'next/link'
import { Box, Flex } from 'rebass'
import { useAuth } from 'use-auth0-hooks'

const Part2 = () => {
    const { login } = useAuth()

    return (
        <Box
            width={[2 / 3]}
            sx={{
                mx: 'auto',
                pb: 6,
            }}
        >
            <Text as="h1">How do I get involved?</Text>
            <Flex>
                <Box width={[1 / 2]}>
                    <Text as="h3">
                        Join our community and then use our platform to: Find a
                        partner and/or team mates Share & develop your idea Get
                        advice & help from others Start your business!
                    </Text>
                </Box>
                <Flex
                    width={[1 / 2]}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'right',
                        }}
                    >
                        <Box m={2}>
                            <Link
                                href=""
                                sx={{ width: '286px' }}
                                onClick={() => login({})}
                            >
                                Create an account
                            </Link>
                        </Box>
                        <Box m={2}>
                            <Link href="/projects/">
                                <Button
                                    variant="secondary"
                                    sx={{ width: '286px' }}
                                >
                                    Find projects
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Part2
