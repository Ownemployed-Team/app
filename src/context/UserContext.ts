import { createContext, useContext } from 'react'

const UserContext = createContext(null)

export default UserContext

export const useUserContext = () => useContext(UserContext)
