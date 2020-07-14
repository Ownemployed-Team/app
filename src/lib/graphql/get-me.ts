import { gql } from 'apollo-boost'

// Getting User's profile data
const GET_ME = gql`
    query me($email: String!) {
        me(email: $email) {
            id
            name
            firstName
            lastName
            email
            createdAt
            socialMedia {
                name
                url
            }
            tags {
                title
            }
            education
            location
        }
    }
`

export default GET_ME
