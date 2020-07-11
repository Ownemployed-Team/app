import { gql } from 'apollo-boost'

// Getting Project's profile data
const GET_PROJECT = gql`
    query getProject($id: String!) {
        getProject(id: $id) {
            id
            createdAt
            updatedAt
            name
            owner {
                id
            }
            contributors {
                id
            }
            summary
            description
            status
            location {
                id
            }
            remote
            tags {
                id
                title
                category
                createdAt
                updatedAt
            }
            picture
            website
        }
    }
`

export default GET_PROJECT
