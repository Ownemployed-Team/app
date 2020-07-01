import { useEffect, useState, memo, ComponentClass, ReactNode } from 'react'
import {
    withAuth0,
    useAuth0,
    withAuthenticationRequired,
} from '@auth0/auth0-react'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Layout from 'components/layout/Layout'
import { useQuery, useMutation } from '@apollo/react-hooks'
import GET_ME from 'graphql/get-me'
import { Member } from 'generated/graphql'

import Text from 'components/common/Text'
//import { useRegisterMember } from 'hooks/useRegisterMember'
import { NewMemberInput } from 'generated/graphql'
import { ExecutionResult, StoreReader } from 'apollo-boost'
import ADD_MEMBER from 'graphql/add-member'
import { useAccessToken } from 'hooks/useAccessToken'

//async function registerMember(data: NewMemberInput): ExecutionResult {
//    try {
//        const newMemberData: NewMemberInput = {
//            lastName: user.family_name,
//            firstName: user.given_name,
//            email: user.email,
//        }
//
//        const [registerMember, result] = useRegisterMember()
//
//        return await registerMember({
//            variables: {
//                ...newMemberData,
//            },
//        })
//    } catch (err) {
//        console.warn(err)
//    }
//}

const Profile = () => {
    const {
        user,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
    } = useAuth0()

    const result = useQuery(GET_ME, {
        variables: {
            email: user.email,
        },
    })

    const { loading, called, data = {} } = result

    const member = data.me

    if (loading) {
        <Layout>
            Loading
        </Layout>
    }

    if (member) {
        window.localStorage.setItem('user_id', member.id)
    }

    return (
        <Layout>
            <Flex pb={4}>
                <Box px={2}>
                    <Link href="/profile/settings">
                        <a>Settings</a>
                    </Link>
                </Box>
                <Box px={2}>
                    <Link href="/profile/my-projects">
                        <a>My projects</a>
                    </Link>
                </Box>
            </Flex>
            <Text as="h1">{user?.name}</Text>
            <Text as="h4">{user?.email}</Text>
        </Layout>
    )
}

export default withAuthenticationRequired(
    (Profile as unknown) as ComponentClass<any, any>
)
