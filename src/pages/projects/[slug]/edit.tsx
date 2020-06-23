import { useRouter } from 'next/router'
import { Flex, Box, Button } from 'rebass'
import { Formik } from 'formik'
import Layout from 'components/layout/Layout'
import { gql } from 'apollo-boost'
import { UpdateProjectInput } from 'generated/graphql'
import { useUserContext } from 'context/UserContext'
import { useMutation } from '@apollo/react-hooks'
import Text from 'components/common/Text'

const updateProjectMutation = gql`
    mutation UpdateProject($data: UpdateProjectInput!) {
        updateProject(data: $data) {
            id
            name
            contributors {
                id
                name
            }
            owner {
                id
                name
            }
        }
    }
`

const formInitialValues = {
    name: '',
}

export default () => {
    const router = useRouter()
    const { slug } = router.query
    const { user } = useUserContext()

    const m = useMutation(updateProjectMutation)

    const [updateProject, result] = useMutation(updateProjectMutation)

    const { loading, data, called } = result

    const isUserLoaded = !user
    const isMutationRunning = loading
    const isLoading = isMutationRunning || isUserLoaded

    //if (loading && called) {
    if (isLoading) {
        return <Layout>Loading...</Layout>
    }

    return (
        <Layout>
            <Flex mx={-3}>
                <Box width={2 / 3}>
                    <Text as="h3">Updated project data</Text>
                    {JSON.stringify(data?.updateProject ?? {})}
                </Box>

                <Box width={1 / 3}>
                    <Formik
                        initialValues={formInitialValues}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                console.log(values)

                                const input: UpdateProjectInput = {
                                    id: slug as string,
                                    name: values.name,
                                    ownerId: user.id,
                                }

                                await updateProject({
                                    variables: {
                                        data: input,
                                    },
                                })

                                setSubmitting(false)
                            } catch (err) {
                                console.log(err)
                                setSubmitting(false)
                            }
                            //
                        }}
                        // onSubmit={(values, { setSubmitting }) => {
                        //     setTimeout(() => {
                        //         alert(JSON.stringify(values, null, 2))
                        //         setSubmitting(false)
                        //     }, 400)
                        // }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />

                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Flex>
        </Layout>
    )
}

//async function updateProject(values) {}

// validate={values => {
//     const errors = {}
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
//             values.email
//         )
//     ) {
//         errors.email = 'Invalid email address'
//     }
//     return errors
// }}
