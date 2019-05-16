import React from 'react'
import Fade from 'react-reveal/Fade'

const Experience = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade delayIn="800" duration={1200} distance="0px">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2">
                <span className="has-text-info title is-size-4">WHERE I'VE WORKED</span>
              </div>

              <div className="column">
                <strong>IBM Extreme Blue </strong>
                <span className="badgeSet">
                  <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-purple">CLOUD</span>
                </span>
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
                <strong>Citizen Schools </strong>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-purple">CLOUD</span>
                </span>
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
                <strong>University of Michigan </strong>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>
                </span>
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
                <strong>Diesel Labs </strong>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-danger">BACKEND</span>
                </span>
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
                <strong>Ramp.Digital </strong>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-danger">BACKEND</span>
                </span>
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
                <strong>Sonorous </strong>
                <span className="badgeSet">
                  <span className="button is-outlined is-rounded is-small is-danger">BACKEND</span>
                </span>
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
