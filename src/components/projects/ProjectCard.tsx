import Text from 'components/common/Text'
import { Flex, Image, Box, Heading, Card } from 'rebass'
import Link from 'components/common/Link'
import { Project } from 'lib/generated/graphql'

const fillIn = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio sint porro vel necessitatibus unde repellendus quos molestiae. Deserunt iusto non amet enim maxime laudantium sed iste quas possimus quaerat!'

const ProjectCard = ({ project }: { project: Project }) => {
    const { description, id, name, picture, summary } = project

    // TODO : wait till cloudinary images is in database and use picture instead of hardcoded image.
    const avatar =
        'https://res.cloudinary.com/ownemployed/image/upload/v1590873376/user_uploads/3D-visning_cygugz.jpg'
    const transformedAvatar = avatar.replace(
        '/upload',
        `/upload/w_auto:100:200`
    )

    return (
        <Link href={`/projects/${id}`}>
            <Card variant="card.secondary" height="100%">
                <Image src={picture ?? avatar} width="100%" />
                <Box p={3}>
                    <Heading>{name}</Heading>
                    <Text>{description ?? fillIn}</Text>
                </Box>
            </Card>
        </Link>
    )
}

export default ProjectCard
