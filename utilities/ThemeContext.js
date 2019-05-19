import {createContext} from 'react'
import getTheme from './getTheme'

const ThemeContext = createContext({useDarkMode: getTheme})

export default ThemeContext
