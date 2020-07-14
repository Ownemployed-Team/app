import config from 'config/env'
import { createContext, useContext } from 'react'

const ConfigContext = createContext(config)

export default ConfigContext

export const useConfig = () => useContext(ConfigContext)
