import React from 'react'
import Fade from 'react-reveal/Fade'


// TODO: Add accordion experience
// TODO: Maybe use levels instead? Mobile view broken
const Experience = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade delayIn="800" distance="0px">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2">
                <span className="has-text-info title is-size-4">WHERE I'VE WORKED</span>
              </div>

              <div className="column">
                <strong>IBM Extreme Blue</strong>
                <br/>
                <span>Software Engineer</span>
                <div className="is-hidden-tablet">
                  <span>May 2019 - Present</span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2019 - Present</span>
              </div>
            </div>

            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Citizen Schools</strong>
                <br/>
                <span>Volunteer Assistant CS Teacher</span>
                <div className="is-hidden-tablet">
                  <span>May 2019 - May 2019</span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2019 - May 2019</span>
              </div>
            </div>


            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>University of Michigan</strong>
                <br/>
                <span>Research Assistant</span>
                <div className="is-hidden-tablet">
                  <span>January 2019 - April 2019</span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <span>January 2019 - April 2019</span>
              </div>
            </div>


            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Diesel Labs</strong>
                <br/>
                <span>Software Engineer</span>
                <div className="is-hidden-tablet">
                  <span>May 2018 - August 2018</span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2018 - August 2018</span>
              </div>
            </div>

            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Ramp.Digital (KONTAKT.TO)</strong>
                <br/>
                <span>Software Engineer</span>
                <div className="is-hidden-tablet">
                  <span>June 2017 - September 2017</span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <span>June 2017 - September 2017</span>
              </div>
            </div>

            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Sonorous</strong>
                <br/>
                <span>Founder</span>
                <div className="is-hidden-tablet">
                  <span>May 2016 - June 2017</span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
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
