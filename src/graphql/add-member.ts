import { gql } from 'apollo-boost'

const ADD_MEMBER = gql`
    mutation addMember($data: NewMemberInput) {
        addMember(data: $data) {
            id
            firstName
            lastName
            email
            tags {
                id
            }
            ownedProjects {
                id
                name
            }
        }
    }
`

export default ADD_MEMBER
