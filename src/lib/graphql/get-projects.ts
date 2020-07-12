import { gql } from 'apollo-boost'
//#query getProjects($skip: Int, $take: Int) {

// Getting all users profiles data
//TODO: Determine which fields we'll need to lighten the query, and change the query in consequence
const GET_PROJECTS = gql`
    query getProjects ($skip: Int, $limit: Int, $owner: String, $name: String) {
        getProjects (data: {
            skip: $skip,
            limit: $limit,
            owner: $owner,
            name: $name
        }) {
            id
            createdAt
            updatedAt
            name
            owner {
                id
                firstName
                lastName
                name
                email
                createdAt
                updatedAt
                headline
                education
                bio
                location
                remote
                socialMedia {
                    id
                    name
                    url
                    createdAt
                    updatedAt
                }
                avatar
                website
            }
            contributors {
                id
                firstName
                lastName
                name
            }
            summary
            description
            status
            location {
                id
                name
            }
            remote
            tags {
                id
                title
                category
            }
            picture
            website
        }
    }
`

export default GET_PROJECTS
