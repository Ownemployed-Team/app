import React from 'react'
import { Flex, Box, Image } from 'rebass'
import { useAuth } from 'use-auth0-hooks'
import Text from 'components/common/Text'
import Button from 'components/common/Button'

export const CallToAction = () => {
    const { isAuthenticated, login } = useAuth()
    return (
        <Flex flexWrap="wrap" mt={5} pr={[4, 4, 7]} pl={[4, 4, 7]}>
            <Box width={[1, 1, 2 / 3]} mb={[0, 0, 5]}>
                <Text
                    as="h2"
                    sx={{
                        fontWeight: 'normal',
                        lineHeight: '52px',
                    }}
                >
                    Ready to join our community and transform the world?
                </Text>
                {!isAuthenticated && (
                    <Button
                        variant="link"
                        sx={{
                            fontSize: 'body',
                            marginTop: 4,
                            pb: 2,
                            pl: 4,
                            pr: 4,
                            pt: 2,
                        }}
                        onClick={() => login({})}
                    >
                        Create an Account
                    </Button>
                )}
            </Box>

            <Box width={[1, 1, 1 / 3]} mb={[0, 0, 5]}>
                <Image
                    src="/imgs/illustrations/team.svg"
                    sx={{
                        display: ['none', 'none', 'block'],
                        width: '100%',
                    }}
                />
            </Box>
        </Flex>
    )
}