import { useEffect } from 'react'
import Link from 'components/common/Link'
import { Flex, Box, Text, Image } from 'rebass'
import { css } from 'emotion'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

import Button from 'components/common/Button'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
    Button as ChakraButton,
} from '@chakra-ui/core'

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
    return (
        <Menu>
            <MenuButton as={ChakraButton} rightIcon="chevron-down">
                {username}
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <Link href="/profile">Profile</Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/profile/my-projects">My Projects</Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/profile/create-project">Start a project</Link>
                </MenuItem>

                <MenuItem
                    onClick={() =>
                        logoutHandler({
                            returnTo: 'http://localhost:3000/',
                        })
                    }
                >
                    Sign Out
                </MenuItem>
            </MenuList>
        </Menu>
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
        <Flex className={links} px={5} py={2} bg="white" alignItems="center">
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
