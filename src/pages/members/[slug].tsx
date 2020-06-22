import Link from 'next/link'
import Layout from 'components/layout/Layout'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import GET_MEMBER from 'graphql/get-member'

const MemberProfile = () => {
    const router = useRouter()

    const { slug } = router.query

    const result = useQuery(GET_MEMBER, {
        variables: {
            id: slug,
        },
    })

    const { loading, data, called } = result

    if (loading && called) {
        return <Layout>loading user details</Layout>
    }

    const {
        getMember: { name, email, socialMedia, education },
    } = data

    return (
        <Layout title={`Account | ${name}`}>
            {name}
            <br />
            {email}
        </Layout>
    )
}

export default MemberProfile
