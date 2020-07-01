import Layout from 'components/layout/Layout'

import { Spinner } from '@chakra-ui/core'

function Loading() {
    return (
        <Layout>
            <Spinner size="xl" />
        </Layout>
    )
}

export default Loading
