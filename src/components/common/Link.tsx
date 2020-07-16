import { FunctionComponent, ReactNode } from 'react'
import NextLink from 'next/link'

type LinkProps = {
    children: ReactNode
    className?: string
    props?: any
    style?: object
    sx?: any
    href?: string
    variant?: string
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Link: FunctionComponent<LinkProps> = ({
    children,
    href,
    variant,
    sx,
    onClick,
    ...props
}) => {
    if (onClick) {
        return <a href="#" onClick={onClick}>{children}</a>
    }

    if (href.startsWith('http') || href.startsWith('mailto')) {
        return <a>{children}</a>
    } else {
        return (
            <NextLink href={href}>
                <a>{children}</a>
            </NextLink>
        )
    }
}

export default Link
