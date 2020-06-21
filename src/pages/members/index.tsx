import Link from 'next/link'
import Layout from 'components/Layout'

const Members = ({ members }) => (
    <Layout title="Ownemployed | About">
        <h1>Members</h1>
        <p>members list</p>
        <ul>
            {members.map(member => {
                return (
                    <li>
                        <Link
                            href="/members/[slug]"
                            as={`/members/${member.id}`}
                        >
                            <a>{member.firstName}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </Layout>
)

export default Members

export async function getServerSideProps() {
    return {
        props: {
            members: [],
        },
    }
}
