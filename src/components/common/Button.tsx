import React from 'react'
import { Button as RebassButton, SxStyleProp } from 'rebass'

const Button = ({
    children,
    variant,
    onClick,
    sx,
    type,
    ...rest
}: {
    children: React.ReactNode
    variant?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    style?: object
    sx?: SxStyleProp
    type?: string
}) => {
    return (
        <RebassButton
            onClick={onClick}
            variant={variant || 'primary'}
            type={type}
            sx={{
                ...sx,
            }}
            {...rest}
        >
            {children}
        </RebassButton>
    )
}

export default Button
