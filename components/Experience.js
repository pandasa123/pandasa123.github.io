import React from 'react'
import Fade from 'react-reveal/Fade'


// TODO: Add accordion experience
const Experence = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade delayIn="800" distance="200px">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered is-gapless is-mobile">
              <div className="column is-3 columnHide"/>
              <div className="column">
                <span className="has-text-link title is-size-5">EXPERIENCE</span>
              </div>
              <div className="column is-6 columnHide"/>
            </div>

            <div className="columns is-centered is-gapless is-mobile">
              <div className="column is-3"/>
              <div className="column">
                <strong>IBM Extreme Blue</strong>
                <br/>
                <span>Software Engineer</span>
              </div>
              <div className="column">
                <p>May 2019 - Present</p>
              </div>
            </div>

            <div className="columns is-centered is-gapless is-mobile">
              <div className="column is-3"/>
              <div className="column">
                <strong>Citizen Schools</strong>
                <br/>
                <span>Volunteer Assistant Teacher</span>
              </div>
              <div className="column">
                <p>May 2019 - May 2019</p>
              </div>
            </div>

            <div className="columns is-centered is-gapless is-mobile">
              <div className="column is-3"/>
              <div className="column">
                <strong>University of Michigan</strong>
                <br/>
                <span>Research Assistant</span>
              </div>
              <div className="column">
                <p>January 2019 - May 2019</p>
              </div>
            </div>

            <div className="columns is-centered is-gapless is-mobile">
              <div className="column is-3"/>
              <div className="column">
                <strong>Diesel Labs</strong>
                <br/>
                <span>Software Engineer</span>
              </div>
              <div className="column">
                <p>May 2018 - August 2019</p>
              </div>
            </div>

            <div className="columns is-centered is-gapless is-mobile">
              <div className="column is-3"/>
              <div className="column">
                <strong>Ramp.Digital (KONTAKT.TO)</strong>
                <br/>
                <span>Software Engineer</span>
              </div>
              <div className="column">
                <p>June 2017 - September 2017</p>
              </div>
            </div>

            <div className="columns is-centered is-gapless is-mobile">
              <div className="column is-3"/>
              <div className="column">
                <strong>Sonorous</strong>
                <br/>
                <span>Founder</span>
              </div>
              <div className="column">
                <p>May 2016 - June 2017</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Experence
