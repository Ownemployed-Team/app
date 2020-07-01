import Card from 'components/common/Card'
import Text from 'components/common/Text'
import { Flex, Image } from 'rebass'
import Link from 'components/common/Link'
import { Project } from 'generated/graphql'
import { Box } from '@chakra-ui/core'

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
        <Box height="300px">
            <Link href={`/projects/${id}`}>
                <Card variant="secondary">
                    <Image src={transformedAvatar} width={'100%'} m={'auto'} />
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
            </Link>
        </Box>
    )
}

export default ProjectCard
