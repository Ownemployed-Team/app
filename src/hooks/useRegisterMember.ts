import { useMutation } from '@apollo/react-hooks'
import ADD_MEMBER from 'graphql/add-member'

export function useRegisterMember() {
    const result = useMutation(ADD_MEMBER)

    return result
}
