import React from 'react'
import '../styles/bulma-switch.scss'
import NightLight from './NightLight'

const Header = props => {
  const {theme, toggle} = props
  return (
    <header>
      <nav className={theme ? 'navbar is-transparent is-dark' : 'navbar is-transparent'} role="navigation"
           aria-label="main navigation">
        <div className="navbar-end">
          <div className="navbar-item">
            <NightLight style={{paddingTop: '10%'}} className="navbar-item" theme={theme} toggle={toggle}/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
