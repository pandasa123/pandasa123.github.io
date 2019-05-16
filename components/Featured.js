import React from 'react'
import Fade from 'react-reveal/Fade'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

const Featured = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <div className="hero-body">
        <div className="container">

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2">
                <span className="has-text-info title is-size-4">FEATURED PROJECTS</span>
              </div>
              <div className="column is-5">
                <div className="image">
                  <img src="../static/MuseumCapture.png" alt="Museum Capture Diagram"/>
                </div>
                <div className="is-hidden-tablet">
                  <strong>User Tracking using AWS Rekognition and Kinesis </strong>
                  <a className="icon projectSet" href="https://github.com/pandasa123/VisitorDemographicsIPCamera">
                    <OpenInNewIcon className="has-text-link"/>
                  </a>
                  <br/><br/>
                  <span><img className="emoji"
                             src="../static/trophy.png"
                             draggable={false} style={{height: '1rem'}}
                             alt="trophy"/> Honourable Mention at AWS IoT Hackathon, this project utilises AWS data analysis and processing to the fullest with AWS Kinesis Streams as the cornerstone to efficient realtime user tracking through a museum</span>
                  <br/><br/>
                  <span className="builtSet">
                  <span className="button is-outlined is-rounded is-small is-danger">NODE.JS</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-purple">AWS</span>
                </span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <strong>User Tracking using AWS Facial Rekognition and Kinesis </strong>
                <a className="icon projectSet" href="https://github.com/pandasa123/VisitorDemographicsIPCamera">
                  <OpenInNewIcon className="has-text-link"/>
                </a>
                <br/><br/>
                <span><img className="emoji"
                           src="../static/trophy.png"
                           draggable={false} style={{height: '1rem'}}
                           alt="trophy"/> Honourable Mention at AWS IoT Hackathon, this project utilises AWS data analysis and processing to the fullest with AWS Kinesis Streams as the cornerstone to efficient realtime user tracking through a museum</span>
                <br/><br/>
                <span className="builtSet">
                  <span className="button is-outlined is-rounded is-small is-danger">NODE.JS</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-purple">AWS</span>
                </span>
              </div>
            </div>
          </Fade>
          <br className="is-hidden-mobile"/>

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2"/>
              <div className="column is-5">
                <div className="image">
                  <img src="../static/pam.png" alt="Hello PAM Demo"/>
                </div>
                <div className="is-hidden-tablet">
                  <strong>Hello PAM! </strong>
                  <a className="icon projectSet" href="https://github.com/pandasa123/Hello_PAM">
                    <OpenInNewIcon className="has-text-link"/>
                  </a>
                  <br/><br/>
                  <span>Hello PAM! is a Windows Linux Subsystem Pluggable Authentication Module that users to authenticate access elevation via Windows Hello (facial recognition / biometrics). No more pesky sudo prompts!</span>
                  <br/><br/>
                  <span className="builtSet">
                  <span className="button is-outlined is-rounded is-small is-danger">RUST</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-purple">LINUX</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-purple">WINDOWS</span>
                </span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <strong>Hello PAM! </strong>
                <a className="icon projectSet" href="https://github.com/pandasa123/Hello_PAM">
                  <OpenInNewIcon className="has-text-link"/>
                </a>
                <br/><br/>
                <span>Hello PAM! is a Windows Linux Subsystem Pluggable Authentication Module that users to authenticate access elevation via Windows Hello (facial recognition / biometrics). No more pesky sudo prompts!</span>
                <br/><br/>
                <span className="builtSet">
                  <span className="button is-outlined is-rounded is-small is-danger">RUST</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-purple">LINUX</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-purple">WINDOWS</span>
                </span>
              </div>
            </div>
          </Fade>
          <br className="is-hidden-mobile"/>


          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2"/>
              <div className="column is-5">
                <div className="image">
                  <img src="../static/PlayerHeatmap.png" alt="Player Heatmap Demo"/>
                </div>
                <div className="is-hidden-tablet">
                  <strong>Women's Field Hockey Analytics Dashboard</strong>
                  <br/><br/>
                  <span><img className="emoji"
                             src="../static/trophy.png"
                             draggable={false} style={{height: '1rem'}}
                             alt="trophy"/>  Winner of Michigan Sports Analytics Hackathon's Best in Design category! Using Michigan Women's field hockey team's player data, we designed an intuitive and interactive data visualisation tool that allowed coaches to observe player and team physical load data throughout a season</span>
                  <br/><br/>
                  <span className="builtSet">
                    <span className="button is-outlined is-rounded is-small is-success">TABLEAU</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">PYTHON</span>
                </span>
                </div>
              </div>
              <div className="column is-hidden-mobile">
                <strong>Women's Field Hockey Analytics Dashboard</strong>
                <br/><br/>
                <span><img className="emoji"
                           src="../static/trophy.png"
                           draggable={false} style={{height: '1rem'}}
                           alt="trophy"/> Winner of Michigan Sports Analytics Hackathon's Best in Design category! Using Michigan Women's field hockey team's player data, we designed an intuitive and interactive data visualisation tool that allowed coaches to observe player and team physical load data throughout a season</span>
                <br/><br/>
                <span className="builtSet">
                  <span className="button is-outlined is-rounded is-small is-success">TABLEAU</span>&nbsp;
                  <span className="button is-outlined is-rounded is-small is-danger">PYTHON</span>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Featured
