import { ComponentClass } from 'react'
import Link from 'next/link'
import { Flex, Box, Image } from 'rebass'
import Text from 'components/common/Text'
import Button from 'components/common/Button'
import Layout from 'components/layout/Layout'
import Loading from 'components/layout/Loading'
import ADD_PROJECT from 'graphql/add-project'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { NewProjectInput, Member } from 'generated/graphql'
import { withAuthenticationRequired } from '@auth0/auth0-react'

let count = 0

export const CreateProject = () => {

    const id = window.localStorage.getItem('user_id')

    const [addProject, result] = useMutation(
        ADD_PROJECT
    )

    const { loading, data, called } = result

    const project = data?.addProject

    if (loading && called) {
        return <Loading />
    }

    const input: NewProjectInput = {
        name: `Test Project from website ${count}`,
        ownerId: id,
    }

    return (
        <Layout title="Ownemployed | Create Project">
            <Flex mx={-2} mt={3}>
                <Box width={1 / 2}>
                    <Text as="h2">Create Project Result</Text>
                    <code>{JSON.stringify(project)}</code>
                </Box>

                <Box width={1 / 2}>
                    <Button
                        onClick={e => {
                            e.preventDefault()
                            count += 1
                            addProject({
                                variables: {
                                    data: input,
                                },
                            })
                                .then(res => {
                                    console.log('success', res)
                                })
                                .catch(err => console.error(err))
                        }}
                    >
                        New Project
                    </Button>
                </Box>
            </Flex>
        </Layout>
    )
}

export default withAuthenticationRequired(
    (CreateProject as unknown) as ComponentClass<any, any>
)
