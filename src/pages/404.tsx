import Link from 'next/link'
import { Flex, Box, Image } from 'rebass'
import { withRouter } from 'next/router'

import Text from 'components/Text'
import Button from 'components/Button'
import Layout from 'components/Layout'

export const NoMatch = ({ router }) => {
    return (
        <Layout>
            <Box
                sx={{
                    mt: 6,
                    textAlign: 'center',
                }}
            >
                <Text
                    as="h1"
                    sx={{
                        fontSize: '7em',
                        lineHeight: '1em',
                    }}
                >
                    404
                </Text>
                <Text>Not Found</Text>
                <br />
                <Button onClick={router.back}>Go back</Button>
            </Box>
        </Layout>
    )
}

export default withRouter(NoMatch)
