import { SimpleGrid } from '@chakra-ui/core'

export default function ProjectsList({
    children,
    columns = [1, 1, 3, 4],
    spacing = 10,
}) {
    return (
        <SimpleGrid columns={columns} spacing={spacing}>
            {children}
        </SimpleGrid>
    )
}
