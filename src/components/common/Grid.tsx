import React from 'react'
import { Flex, SxStyleProp } from 'rebass'

//This component replaces the original dependency on the chakra-ui SimpleGrid.
//It is currently untested.
const Grid = ({
    children,
    maxColumns,
    variant,
    sx,
    type,
    ...rest
}: {
    children: React.ReactNode
    maxColumns?: number
    variant?: string
    sx?: SxStyleProp
    type?: string
}) => {
    return (
        <Flex
        variant={variant || 'primary'}
        type={type}
        sx={{
            display: 'grid',
            gridGap: '4',
            width: maxColumns || 1,
            ...sx,
        }}
        {...rest}
        >
            {children}
        </Flex>
    )
}

export default Grid