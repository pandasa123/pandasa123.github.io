import {createContext} from 'react'
import getTheme from './getTheme'

const theme = getTheme()
console.log(theme)
const ThemeContext = createContext({useDarkMode: theme, toggle: null})

export default ThemeContext
