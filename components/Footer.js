import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGithub, faLinkedin} from '@fortawesome/fontawesome-free-brands'
import {faCode, faEnvelope} from '@fortawesome/fontawesome-free-solid'

// TODO: Add peace sign

const footerStyle = {backgroundColor: 'white', paddingBottom: '30px'}
const Footer = props => {
  return (
    <footer className={props.theme ? 'footer dark-footer' : 'footer'} style={footerStyle}>
      <div className="container">
        <div className="columns has-text-centered-mobile">
          <div className="column">
            <strong>Designed & Developed by Sanket Panda</strong>
          </div>
          <div className="column is-2-tablet is-hidden-mobile"/>
          <div className="column has-text-right-widescreen">
            <span className="has-text-info">
              <a href="mailto:pandasa@umich.edu">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                </span>
              </a>
              &nbsp;
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
              </span>
              &nbsp;
              <span className="icon">
                <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
              </span>
              &nbsp;
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} size="lg"/>
              </span>
              &nbsp;
              <span className="icon">
                <FontAwesomeIcon icon={faCode} size="lg"/>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
