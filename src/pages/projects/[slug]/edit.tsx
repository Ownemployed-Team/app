import { useState } from 'react'
import { useRouter } from 'next/router'
import { Flex, Box, Button } from 'rebass'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Input, Textarea } from '@rebass/forms'
//import Button from 'components/common/Button'
import Layout from 'components/layout/Layout'

import { gql } from 'apollo-boost'
import { UpdateProjectInput, Project } from 'generated/graphql'
import { useMutation } from '@apollo/react-hooks'
import Text from 'components/common/Text'
import ImageUploader from 'components/common/ImageUploader'
import { Editable, EditableInput, EditablePreview, ButtonGroup, IconButton } from '@chakra-ui/core'

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
    id: '',
    name: '',
    createdAt: '',
    updatedAt: '',
    summary: '',
    description: '',
    status: ``
}

 function EditableControls({ isEditing, onSubmit, onCancel, onRequestEdit }) {
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon="check" onClick={onSubmit} />
        <IconButton icon="close" onClick={onCancel} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon="edit" onClick={onRequestEdit} />
      </Flex>
    );
  }


export default () => {
    const router = useRouter()
    const { slug } = router.query

    const m = useMutation(updateProjectMutation)

    const [updateProject, result] = useMutation(updateProjectMutation)

    const { loading, data, called } = result

    const isMutationRunning = loading
    const isLoading = isMutationRunning

    const [projectImage, setProjectImage] = useState('')

    const handleUploadedImage = imageUrl => {
        setProjectImage(imageUrl)
    }

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
                <Box>
                    <Editable
      textAlign="center"
      defaultValue="Rasengan ⚡️"
      fontSize="2xl"
      isPreviewFocusable={false}
      submitOnBlur={false}
    >
      {props => (
        <>
          <EditablePreview />
          <EditableInput />
          <EditableControls {...props} />
        </>
      )}
    </Editable>
                </Box>
            </Flex>
        </Layout>
    )
}


//
//                <Box width={1 / 3}>
//                    <Formik
//                        initialValues={formInitialValues}
//                        onSubmit={async (values, { setSubmitting }) => {
//                            try {
//
//                                const input: UpdateProjectInput = {
//                                    id: slug as string,
//                                    name: values.name,
//                                    ownerId: user.id,
//                                }
//
//                                await updateProject({
//                                    variables: {
//                                        data: input,
//                                    },
//                                })
//
//                                setSubmitting(false)
//                            } catch (err) {
//                                console.log(err)
//                                setSubmitting(false)
//                            }
//                            //
//                        }}
//                    >
//                        {({
//                            values,
//                            errors,
//                            touched,
//                            handleChange,
//                            handleBlur,
//                            handleSubmit,
//                            isSubmitting,
//                        }) => (
//                        <Form>
//                            <Box
//                                sx={{
//                                    borderRadius: 0,
//                                    borderBottom: '1px solid',
//                                }}
//                            >
//                                <Box sx={{ mx: [2, 4, 6] }}>
//                                    <Box my={4}>
//                                        <Field
//                                            name="name"
//                                            placeholder="Name"
//                                            as={Input}
//                                        />
//                                        {errors.name && touched.name ? (
//                                            <Text sx={{ color: 'red' }}>
//                                                {errors.name}
//                                            </Text>
//                                        ) : null}
//                                    </Box>
//                                    <Box my={4}>
//                                        <Field
//                                            as={Textarea}
//                                            name="summary"
//                                            placeholder="Summary"
//                                        />
//                                        <Text as="body">
//                                            Tell us about your project in 140
//                                            charachters or less.
//                                        </Text>
//                                        {errors.summary &&
//                                        touched.summary ? (
//                                            <Text sx={{ color: 'red' }}>
//                                                {errors.summary}
//                                            </Text>
//                                        ) : null}
//                                    </Box>
//                                    <Box my={4}>
//                                        <ImageUploader
//                                            onUploadedImage={
//                                                handleUploadedImage
//                                            }
//                                            isImageVisibleInBox
//                                        />
//                                    </Box>
//                                    <Box my={4}>
//                                        <Field
//                                            name="description"
//                                            placeholder="Description"
//                                        />
//                                        <Text as="body">
//                                            Describe the mission of your
//                                            project.
//                                        </Text>
//                                        {errors.description &&
//                                        touched.description ? (
//                                            <Text sx={{ color: 'red' }}>
//                                                {errors.description}
//                                            </Text>
//                                        ) : null}
//                                    </Box>
//                                </Box>
//                            </Box>
//                            <Box mx={[2, 4, 6]}>
//                                <Box my={4} sx={{ textAlign: 'right' }}>
//                                    <Button sx={{ width: '265px' }}>
//                                        Create Project
//                                    </Button>
//                                </Box>
//                            </Box>
//                             <Button type="submit" disabled={isSubmitting}>
//                                Submit
//                             </Button>
//                        </Form>
//                        )}
//                    </Formik>
//                </Box>
//
//



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



                            //<form onSubmit={handleSubmit}>
                            //    <input
                            //        type="text"
                            //        name="name"
                            //        onChange={handleChange}
                            //        onBlur={handleBlur}
                            //        value={values.name}
                            //    />

                            //    <Button type="submit" disabled={isSubmitting}>
                            //        Submit
                            //    </Button>
                            //</form>



                            /*
                                    <Box my={4}>
                                        <Field
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            component={Select}
                                            isMulti={true}
                                            name="location"
                                            onChange={handleSelected(
                                                'location',
                                                setFieldValue
                                            )}
                                            options={locationOptions}
                                            placeholder={'Locations'}
                                            styles={styles}
                                        />
                                        {/* <Select
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            name="location"
                                            onChange={handleLocationSelected}
                                            options={locationOptions}
                                            placeholder={'Locations'}
                                            styles={styles}
                                            value={locations}
                                        />}
                                        {errors.location && touched.location ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.location}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            component={Select}
                                            isMulti
                                            name="sectors"
                                            onChange={handleSelected(
                                                'sectors',
                                                setFieldValue
                                            )}
                                            options={sectorOptions}
                                            placeholder={'Sector'}
                                            styles={styles}
                                        />
                                        {errors.sectors && touched.sectors ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.sectors}
                                            </Text>
                                        ) : null}
                                    </Box>
                                    <Box my={4}>
                                        <Field
                                            className={selectLocation}
                                            classNamePrefix="select"
                                            closeMenuOnSelect={false}
                                            component={Select}
                                            isMulti
                                            name="skillsRequired"
                                            onChange={handleSelected(
                                                'skillsRequired',
                                                setFieldValue
                                            )}
                                            options={skillsOptions}
                                            placeholder={'Skills'}
                                            styles={styles}
                                        />
                                        {errors.skillsRequired &&
                                        touched.skillsRequired ? (
                                            <Text sx={{ color: 'red' }}>
                                                {errors.skillsRequired}
                                            </Text>
                                        ) : null}
                                    </Box>
*/
