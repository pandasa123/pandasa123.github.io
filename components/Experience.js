import React, {useContext} from 'react'
import Fade from 'react-reveal/Fade'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import ThemeContext from '../utilities/ThemeContext'

const Experience = () => {
  const useDarkMode = useContext(ThemeContext)
  return (
    <section className={useDarkMode ? 'hero is-medium is-dark' : 'hero is-medium'}>
      {/*<Fade delayIn="800" duration={1200} distance="0px">*/}
      <div className="hero-body">
        <div className="container">
          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2">
                <span className="has-text-info title is-size-4">WHERE I'VE WORKED</span>
                <br/>
                <a href="https://s3.amazonaws.com/sanket-panda-resume/SanketPandaResume.pdf"
                   className="is-size-6 has-text-info">SEE MY RESUME </a>
                <a className="icon has-text-info" style={{position: 'relative', top: '2px'}}
                   href="https://s3.amazonaws.com/sanket-panda-resume/SanketPandaResume.pdf">
                  <OpenInNewIcon size={'1rem'}/>
                </a>
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
                <ul className="is-size-7">
                  <br/>
                  <li>Extended Salesforce Active Chat and integrating IBM Watson features to expedite average case
                    handling time
                  </li>
                  <br/>
                  <li>Built a companion application to monitor support agent availability and facilitate efficient
                    queue
                    handling
                  </li>
                </ul>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2019 - Present</span>
              </div>
            </div>
          </Fade>

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Citizen Schools </strong>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-purple">CLOUD</span>
                </span>
                <br/>
                <span>Volunteer Assistant CS Teacher </span>
                <div className="is-hidden-tablet">
                  <span>May 2019 - May 2019</span>
                </div>
                <ul className="is-size-7">
                  <br/>
                  <li>Taught students about scalable software solutions and industry best practices
                  </li>
                  <br/>
                  <li>Helped individual students on a per-student basis
                  </li>
                </ul>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2019 - May 2019</span>
              </div>
            </div>
          </Fade>


          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>University of Michigan </strong>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>
                </span>
                <br/>
                <span>Research Assistant </span>
                <div className="is-hidden-tablet">
                  <span>January 2019 - April 2019</span>
                </div>
                <ul className="is-size-7">
                  <br/>
                  <li>Worked with Professor Clive D’Souza to build responsive mobility lab data visualisations using
                    D3.js and MySQL
                  </li>
                  <br/>
                  <li>Implemented multi-variate models using LALOLib and ML.js
                  </li>
                </ul>
              </div>
              <div className="column is-hidden-mobile">
                <span>January 2019 - April 2019</span>
              </div>
            </div>
          </Fade>

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Diesel Labs </strong>
                <br className="is-hidden-tablet"/>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-danger">BACKEND</span>
                </span>
                <br/>
                <span>Software Engineer </span>
                <div className="is-hidden-tablet">
                  <span>May 2018 - August 2018</span>
                </div>
                <ul className="is-size-7">
                  <br/>
                  <li>Built a visualization that demonstrated Diesel Lab’s data intelligence using React / Redux / Scala
                    Finatra
                  </li>
                  <br/>
                  <li>Saved 150+ hours by building an Excel data export API for clients using APACHE POI / React / Redux
                  </li>
                  <br/>
                  <li>Delivered onboarding process for new clients using React / Redux
                  </li>
                </ul>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2018 - August 2018</span>
              </div>
            </div>
          </Fade>


          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Ramp.Digital </strong>
                <span className="badgeSet">
                 <span className="button is-outlined is-rounded is-small is-success">FRONTEND</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-danger">BACKEND</span>
                </span>
                <br/>
                <span>Software Engineer </span>
                {/*<TextModal id="ramp" title={'Software Engineer @ Ramp.Digital'}*/}
                {/*           content={['', '']}/>*/}
                <div className="is-hidden-tablet">
                  <span>June 2017 - September 2017</span>
                </div>
                <ul className="is-size-7">
                  <br/>
                  <li>Designed a NodeJS / MQTT load balancing application to test various IoT solutions
                  </li>
                  <br/>
                  <li>Built a scalable dashboard to monitor and manage IoT solutions
                  </li>
                </ul>
              </div>
              <div className="column is-hidden-mobile">
                <span>June 2017 - September 2017</span>
              </div>
            </div>
          </Fade>


          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column">
                <strong>Sonorous </strong>
                <span className="badgeSet">
                  <span className="button is-outlined is-rounded is-small is-danger">BACKEND</span>
                </span>
                <br/>
                <span>Founder </span>
                <div className="is-hidden-tablet">
                  <span>May 2016 - June 2017</span>
                </div>
                <ul className="is-size-7">
                  <br/>
                  <li>Designed a platform agnostic portable device to wirelessly record acoustic guitars with high
                    fidelity
                  </li>
                  <br/>
                  <li>Secured venture capital funding from Kalinga Ventures Startup Competition and the University of
                    Michigan: Center for Entrepreneurship
                  </li>
                </ul>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2016 - June 2017</span>
              </div>
            </div>
          </Fade>

        </div>
      </div>
      {/*</Fade>*/}
    </section>
  )
}

export default Experience
