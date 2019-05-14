import React from 'react'
import Lorem from './Lorem'

// TODO: Add socials / mailtos

const footerStyle = {backgroundColor: 'white', paddingBottom: '20px'}
const Footer = props => {
  return (
    <footer className={props.theme ? 'footer dark-footer' : 'footer'} style={footerStyle}>
      <div className="content">
        <Lorem/>
      </div>
    </footer>
  )
}

export default Footer
