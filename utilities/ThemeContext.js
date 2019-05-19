import {createContext} from 'react'
import getTheme from './getTheme'

const theme = getTheme()
const ThemeContext = createContext({useDarkMode: theme, toggle: null})

export default ThemeContext
