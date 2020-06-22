import { useEffect, useState, memo, ComponentClass, ReactNode } from 'react'
import { useAuth, withAuth, withLoginRequired } from 'use-auth0-hooks'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Layout from 'components/layout/Layout'
import { useQuery, useMutation } from '@apollo/react-hooks'
import GET_ME from 'graphql/get-me'
import { Member } from 'generated/graphql'

import Text from 'components/Text'
//import { useRegisterMember } from 'hooks/useRegisterMember'
import { NewMemberInput } from 'generated/graphql'
import { ExecutionResult } from 'apollo-boost'
import ADD_MEMBER from 'graphql/add-member'

async function getUserFromAuth0() {}

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

function useGetMemberFromAPI(email: string): Member | null {
    const result = useQuery(GET_ME, {
        variables: {
            email: email,
        },
    })
    const { loading, called, data = {} } = result
    const member = data.me

    if (!loading && called) {
        return member
    }
}

const Profile = ({ auth }) => {
    const { user } = auth
    const { email } = user

    const { accessToken } = useAuth({
        scope: 'read:self',
        audience: process.env.API_AUDIENCE,
    })

    const { loading, called, data } = useQuery(GET_ME, {
        variables: {
            email: email,
        },
    })

    //    const [registerMember, registerResult] = useMutation(ADD_MEMBER)
    //
    //    console.log(apiMember)
    //
    //    //console.log('register result', registerResult)
    //
    //    useEffect(() => {
    //        if (!apiMember) {
    //            const newMemberData: NewMemberInput = {
    //                lastName: user.family_name,
    //                firstName: user.given_name,
    //                email: user.email,
    //                tags: [],
    //            }
    //
    //            registerMember({ variables: { data: { ...newMemberData } } })
    //                .then(res => {
    //                    console.log(res)
    //                })
    //                .catch(err => {
    //                    console.error(err)
    //                })
    //        }
    //    }, [])

    if (loading && called) {
        return (
            <Layout>
                <Text> Loading </Text>
            </Layout>
        )
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
            <Text as="h1">{data.me.name}</Text>
            <Text as="h4">{data.me.email}</Text>
        </Layout>
    )
}

const withAuthHOC = withAuth((Profile as unknown) as ComponentClass<any, any>)

export default withLoginRequired(
    (withAuthHOC as unknown) as ComponentClass<any, any>
)
