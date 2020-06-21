import { FunctionComponent, ReactNode } from 'react'
//import NextLink from 'next/link'
import { Link as RebassLink, Box, SxStyleProp } from 'rebass'

type LinkProps = {
    children: ReactNode
    className?: string
    props?: any
    style?: object
    sx?: SxStyleProp
    href: string
    variant?: string
}
const defaultStyles = {
    textDecoration: 'none',
}
export const Link: FunctionComponent<LinkProps> = ({
    children,
    href,
    variant,
    sx,
    ...props
}) => {
    if (href.startsWith('http') || href.startsWith('mailto')) {
        return (
            <RebassLink
                target="_blank"
                href={href}
                variant={variant || 'primary'}
                sx={{ ...defaultStyles, ...sx }}
                {...props}
            >
                {children}
            </RebassLink>
        )
    } else {
        return (
            <Link href={href} {...props}>
                <RebassLink sx={{ display: 'inline', ...defaultStyles, ...sx }}>
                    {children}
                </RebassLink>
            </Link>
        )
    }
}

export default Link
