import React from 'react'

// TODO: Add socials / mailtos

const Footer = props => {
  return (
    <footer className={props.theme ? 'footer dark-footer' : 'footer'}>
      <div className="content has-text-centered">
        <span>I'm the footer</span>
      </div>
    </footer>
  )
}

export default Footer
