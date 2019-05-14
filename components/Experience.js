import React from 'react'
import Fade from 'react-reveal/Fade'


// TODO: Add accordion experience
const Experience = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade delayIn="800" distance="50px">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-1">
              <div className="column is-1 is-hidden-mobile"/>
              <div className="column is-3">
                <span className="has-text-info title is-size-5 experience">EXPERIENCE</span>
              </div>
              <div className="column is-1 is-hidden-mobile"/>

              {/* Companies */}
              <div className="column">
                <strong>IBM Extreme Blue</strong>
                <br/>
                <span>Software Engineer</span>
                <br/><br/>

                <strong>Citizen Schools</strong>
                <br/>
                <span>Volunteer Assistant Teacher</span>
                <br/><br/>

                <strong>University of Michigan</strong>
                <br/>
                <span>Research Assistant</span>
                <br/><br/>

                <strong>Diesel Labs</strong>
                <br/>
                <span>Software Engineer</span>
                <br/><br/>

                <strong>Ramp.Digital (KONTAKT.TO)</strong>
                <br/>
                <span>Software Engineer</span>
                <br/><br/>

                <strong>Sonorous</strong>
                <br/>
                <span>Founder</span>
                <br/><br/>
              </div>

              {/* Employment Period */}
              <div className="column">
                <span>May 2019 - Present</span>
                <br/><br/><br/>
                <span>May 2019 - May 2019</span>
                <br/><br/><br/>
                <span>January 2019 - May 2019</span>
                <br/><br/><br/>
                <span>May 2018 - August 2019</span>
                <br/><br/><br/>
                <span>June 2017 - September 2017</span>
                <br/><br/><br/>
                <span>May 2016 - June 2017</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Experience
