import Card from 'components/common/Card'
import Text from 'components/common/Text'
import { Box, Flex, Image } from 'rebass'
import { Label } from '@rebass/forms'
import Link from 'next/link'
import { UniqueInputFieldNamesRule } from 'graphql'
import { Project } from 'generated/graphql'

const ProjectCard = ({ project }: { project: Project }) => {
    const { id, name, description, picture, summary } = project

    // TODO : wait till cloudinary images is in database and use picture instead of hardcoded image.
    const avatar =
        'https://res.cloudinary.com/ownemployed/image/upload/v1590873376/user_uploads/3D-visning_cygugz.jpg'
    const transformedAvatar = avatar.replace(
        '/upload',
        `/upload/w_auto:100:400`
    )

    return (
        <Box px={0} py={0} width={[1, 1 / 3, 1 / 4]} mx={2} my={2}>
            <Link href={`/projects/${id}`}>
                <a>
                    <Card variant="secondary">
                        <Image
                            src={transformedAvatar}
                            width={'100%'}
                            m={'auto'}
                        />
                        <Box
                            bg={'white'}
                            sx={{
                                minHeight: 280,
                                mx: 'auto',
                                p: 4,
                            }}
                        >
                            <Text as="h1" sx={{ fontSize: [16, 20, 20] }}>
                                {name}
                            </Text>
                            <Text
                                as="body"
                                sx={{
                                    mb: 2,
                                    overflow: 'auto',
                                    textOverflow: 'ellipsis',
                                    maxHeight: 70,
                                }}
                            >
                                {summary}
                            </Text>
                            <Flex flexWrap="wrap">Lorem ipsum</Flex>
                        </Box>
                    </Card>
                </a>
            </Link>
        </Box>
    )
}

export default ProjectCard
