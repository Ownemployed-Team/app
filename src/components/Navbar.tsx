import Link from 'next/link'
import { Flex, Box, Text, Image } from 'rebass'
import { css } from 'emotion'
import { useRouter } from 'next/router'
import { useAuth } from 'use-auth0-hooks'

import Button from 'components/Button'

const links = css`
    a {
        color: #ddd;
        margin: 0 1em;
    }
`

export default function Navbar() {
    const { pathname, query } = useRouter()
    const { isAuthenticated, isLoading, login, logout } = useAuth()

    return (
        <Flex className={links} px={5} py={2} bg="white" alignItems="center">
            <Link href="/">
                <a>
                    <Image
                        alt="logo"
                        src="/ownemployed_logo.png"
                        width="245px"
                    />
                </a>
            </Link>
            <Box mx="auto" />
            <Link href="/projects">
                <a>Explore</a>
            </Link>{' '}
            <Link href="/members">
                <a>Find Members</a>
            </Link>{' '}
            <Link href="/learn">
                <a>Learn</a>
            </Link>{' '}
            <a href="https://ownemployed.tribe.so/">
                <a>Community</a>
            </a>{' '}
            {!isLoading &&
                (isAuthenticated ? (
                    <>
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                        <Button
                            onClick={() =>
                                logout({
                                    returnTo: 'http://localhost:3000/',
                                })
                            }
                        >
                            Sign Out
                        </Button>
                    </>
                ) : (
                    <Button
                        onClick={() =>
                            login({
                                appState: { returnTo: { pathname, query } },
                            })
                        }
                    >
                        Sign In
                    </Button>
                ))}
            <Link href="/projects/create-project">
                <a>
                    <Button>Start a project</Button>
                </a>
            </Link>{' '}
        </Flex>
    )
}
