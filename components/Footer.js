import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGithub, faLinkedin} from '@fortawesome/fontawesome-free-brands'
import {faEnvelope} from '@fortawesome/fontawesome-free-solid'

const footerStyle = {backgroundColor: 'white', paddingBottom: '30px'}
const Footer = props => {
  return (
    <footer className={props.theme ? 'footer dark-footer' : 'footer'} style={footerStyle}>
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered-mobile">
            <strong>Designed & Developed by Sanket Panda ✌️</strong>
          </div>
          <div className="column is-hidden-mobile"/>
          <div className="column has-text-centered-mobile has-text-right">
            <span className="has-text-info">
              <a href="mailto:pandasa@umich.edu">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                </span>
              </a>
              &nbsp;
              <a href="https://linkedin.com/in/sanketpanda/">
                <span className="icon">
                  <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                </span>
              </a>
              &nbsp;
              <a href="http://facebook.com/pandasa123">
                <span className="icon">
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
                </span>
              </a>
              &nbsp;
              <a href="https://github.com/pandasa123">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} size="lg"/>
                </span>
              </a>
              {/*&nbsp;*/}
              {/*<span className="icon">*/}
              {/*  <FontAwesomeIcon icon={faCode} size="lg"/>*/}
              {/*</span>*/}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
