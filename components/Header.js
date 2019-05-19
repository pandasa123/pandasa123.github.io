import React, {useContext} from 'react'
import '../styles/bulma-switch.scss'
import NightLight from './NightLight'
import ThemeContext from '../utilities/ThemeContext'

const Header = () => {
  const {useDarkMode, toggle} = useContext(ThemeContext)
  return (
    <header>
      <nav className={useDarkMode ? 'navbar is-transparent is-dark' : 'navbar is-transparent'} role="navigation"
           aria-label="main navigation">
        <div className="navbar-end">
          <div className="navbar-item">
            <NightLight className="navbar-item" theme={useDarkMode} toggle={toggle}/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
