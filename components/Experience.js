import React from 'react'
import Fade from 'react-reveal/Fade'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

const Experience = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
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
                <span>Software Engineer </span>
                {/*<TextModal id="ibm" title={'Software Engineer @ IBM Extreme Blue'}*/}
                {/*           content={['Extending Salesforce Active Chat and integrating IBM Watson features to expedite average case handling time', 'Built a companion application to monitor support agent availability and facilitate efficient queue handling']}/>*/}
                <div className="is-hidden-tablet">
                  <span>May 2019 - Present</span>
                </div>
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
                {/*<TextModal id="citizen" title={'Volunteer Assistant CS Teacher @ Citizen Schools'}*/}
                {/*           content={['Taught students about scalable software solutions and industry best practices', 'Helped individual students on a per-student basis']}/>*/}
                <div className="is-hidden-tablet">
                  <span>May 2019 - May 2019</span>
                </div>
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
                {/*<TextModal id="umich" title={'Research Assistant @ University of Michigan'}*/}
                {/*           content={['Worked with Professor Clive D’Souza to build responsive mobility lab data visualisations using D3.js and MySQL', 'Implemented multi-variate models using LALOLib and ML.js']}/>*/}
                <div className="is-hidden-tablet">
                  <span>January 2019 - April 2019</span>
                </div>
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
                {/*<TextModal id="diesel" title={'Software Engineer @ Diesel Labs'}*/}
                {/*           content={['Built a visualization that demonstrated Diesel Lab’s data intelligence using React / Redux / Scala Finatra', 'Saved 150+ hours by building an Excel data export API for clients using APACHE POI / React / Redux', 'Delivered onboarding process for new clients using React / Redux']}/>*/}
                <div className="is-hidden-tablet">
                  <span>May 2018 - August 2018</span>
                </div>
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
                {/*           content={['Designed a NodeJS / MQTT load balancing application to test various IoT solutions', 'Built a scalable dashboard to monitor and manage IoT solutions']}/>*/}
                <div className="is-hidden-tablet">
                  <span>June 2017 - September 2017</span>
                </div>
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
                {/*<TextModal id="sonorous" title={'Founder @ Sonorous'}*/}
                {/*           content={['Designed a platform agnostic portable device to wirelessly record acoustic guitars with high fidelity', 'Secured venture capital funding from Kalinga Ventures Startup Competition and the University of Michigan: Center for\n' +*/}
                {/*           'Entrepreneurship']}/>*/}
                <div className="is-hidden-tablet">
                  <span>May 2016 - June 2017</span>
                </div>
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
