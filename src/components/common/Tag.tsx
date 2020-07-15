import React from 'react'
import { Text, SxStyleProp } from 'rebass'

//This component replaces the original dependency on the chakra-ui tag.
//It is essentially a key-value pair where the value is some text
const Tag = ({
    children,
    key,
    sx,
    variant,
    type,
    ...rest
}: {
    children: React.ReactNode
    key: string
    sx?: SxStyleProp
    variant?: string
    type?: string
}) => {
    return (
        <Text
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
        </Text>
    )
}

export default Tag