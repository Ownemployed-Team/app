import { gql } from 'apollo-boost'

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
export const GET_MEMBERS = gql`
    query getMembers {
        getMembers {
            id
            firstName
            lastName
            bio
            location
            remote
            tags {
                id
                title
                category
            }
            avatar
        }
    }
`
