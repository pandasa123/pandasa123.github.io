import {createContext} from 'react'

const theme = false
const ThemeContext = createContext({useDarkMode: theme, toggle: null})

export default ThemeContext
