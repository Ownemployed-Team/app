import React from 'react'
import { Box, SxStyleProp } from 'rebass'

//This component replaces the original dependency on the chakra-ui stack.
//It quite simply stacks components one on top of the other, as that was all
//the original component was being used for.
const Stack = ({
    children,
    variant,
    sx,
    type,
    ...rest
}: {
    children: React.ReactNode
    variant?: string
    sx?: SxStyleProp
    type?: string
}) => {
    return (
        <Box
        variant={variant || 'primary'}
        type={type}
        sx={{
            display: 'grid',
            gridGap: '4',
            ...sx,
        }}
        {...rest}
        >
            {children}
        </Box>
    )
}

export default Stack