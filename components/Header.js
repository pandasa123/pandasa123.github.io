import React, {useContext} from 'react'
import '../styles/bulma-switch.scss'
import NightLight from './NightLight'
import ThemeContext from '../utilities/ThemeContext'

const Header = props => {
  const {toggle} = props
  const theme = useContext(ThemeContext)
  return (
    <header>
      <nav className={theme ? 'navbar is-transparent is-dark' : 'navbar is-transparent'} role="navigation"
           aria-label="main navigation">
        <div className="navbar-end">
          <div className="navbar-item">
            <NightLight className="navbar-item" theme={theme} toggle={toggle}/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
