import Link from 'next/link'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import { generateUserSlugs } from 'lib/url'
import { connection } from 'config/database'

const MemberProfile = ({ member }) => {
    const router = useRouter()

    const { slug } = router.query

    return (
        <Layout title={`Account | ${member.name}`}>
            <h1>{member.name}</h1>
            <p>{member.email}</p>
            <p>
                <Link href="/">
                    <a>Go back?</a>
                </Link>
            </p>
        </Layout>
    )
}

export default MemberProfile

export async function getServerSideProps(context) {
    const { slug } = context.params

    const [member] = await connection.select('*').from('members').where({
        id: slug,
    })

    const {
        created_at,
        updated_at,
        first_name,
        last_name,
        ...memberData
    } = member

    return {
        props: {
            member: {
                name: `${first_name} ${last_name}`,
                ...memberData,
            },
        },
    }
}
