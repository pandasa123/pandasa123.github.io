import {createContext} from 'react'
import getTheme from './getTheme'

const ThemeContext = createContext({useDarkMode: getTheme, toggle: null})

export default ThemeContext
