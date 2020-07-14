import { useEffect } from 'react'
import Link from 'components/common/Link'
import { Flex, Box, Text, Image } from 'rebass'
import { css } from 'emotion'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

import Button from 'components/common/Button'

const links = css`
    a {
        margin: 0 0.5em;
    }
`

const Brand = () => {
    return (
        <Link href="/">
            <Image alt="logo" src="/ownemployed_logo.png" width="245px" />
        </Link>
    )
}

const ProfileMenu = ({ username, logoutHandler }) => {
    let clearId: () => void = () => {}

    useEffect(() => {
        clearId = () => {
            window.localStorage.removeItem('user_id')
        }
    }, [])

    return (
        <Flex>
            <Link href="/profile">Profile</Link>

            <Link href="/profile/my-projects">My Projects</Link>

            <Link href="/profile/create-project">Start a project</Link>

            <Button
                onClick={() => {
                    clearId()

                    logoutHandler({
                        returnTo: 'http://localhost:3000/',
                    })
                }}
            >
                Sign Out
            </Button>
        </Flex>
    )
}

export default function Navbar() {
    const { pathname, query } = useRouter()
    //const { isAuthenticated = false, isLoading, login, logout } = useAuth()
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0()

    return (
        <Flex className={links} px={5} py={2} bg="white" alignItems="center" sx={{width:'100%'}}>
            <Brand />
            <Box mx="auto" />
            <Link href="/projects">Explore</Link>{' '}
            <Link href="/members">Find Members</Link>{' '}
            <Link href="/learn">Learn</Link>{' '}
            <a href="https://ownemployed.tribe.so/">Community </a>
            {!isLoading &&
                (isAuthenticated ? (
                    <ProfileMenu username={user.name} logoutHandler={logout} />
                ) : (
                    <Button
                        onClick={() => {
                            loginWithRedirect({
                                appState: {
                                    returnTo: {
                                        pathname,
                                        //pathname: `/profile`,
                                        query,
                                    },
                                },
                            })
                        }}
                    >
                        Sign In
                    </Button>
                ))}
        </Flex>
    )
}
