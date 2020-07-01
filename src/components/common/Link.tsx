import { FunctionComponent, ReactNode } from 'react'
import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/core'

type LinkProps = {
    children: ReactNode
    className?: string
    props?: any
    style?: object
    sx?: SxStyleProp
    href: string
    variant?: string
}

const NextLinkWrapper = ({ href, children }) => {
    return (
        <NextLink href={href}>
            <a>{children}</a>
        </NextLink>
    )
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
            <ChakraLink isExternal target="_blank" href={href} {...props}>
                {children}
            </ChakraLink>
        )
    } else {
        return (
            <ChakraLink as={NextLinkWrapper} href={href}>
                {children}
            </ChakraLink>
        )
    }
}

export default Link
