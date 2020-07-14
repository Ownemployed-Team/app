import { Flex, Box, Text } from 'rebass'

function GalleryItem({ children, widths = [1, 1, 1 / 3], gap = 3 }) {
    return (
        <Box px={gap} py={gap} width={widths}>
            {children}
        </Box>
    )
}

export function Gallery({ items }) {
    const list = items.map((component, index) => (
        <GalleryItem key={index}>{component}</GalleryItem>
    ))

    return (
        <Flex mx={-2} flexWrap="wrap">
            {list}
        </Flex>
    )
}
