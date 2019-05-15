import React from 'react'
import Fade from 'react-reveal/Fade'

// TODO: Broken mobile header

const Skills = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade delayIn="800" distance="0px">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-1 is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2">
                <span className="has-text-info title is-size-4">MY SKILLS</span>
              </div>
              <div className="column is-2">
                <strong className="shadow is-success">FRONTEND</strong>
                <br/><br/>
                <span>JavaScript</span>
                <br/>
                <span>TypeScript</span>
                <br/>
                <span>React</span>
                <br/>
                <span>Next</span>
                <br/>
                <span>Vue</span>
                <br/>
                <span>D3.js</span>
                <br/>
                <span>ML.js</span>
              </div>
              <div className="column is-hidden-tablet is-hidden-mobile"/>
              <div className="column is-2">
                <strong className="shadow is-danger">BACKEND</strong>
                <br/><br/>
                <span>Node.js</span>
                <br/>
                <span>C/C++</span>
                <br/>
                <span>Python</span>
                <br/>
                <span>Scala</span>
                <br/>
                <span>REST</span>
                <br/>
                <span>GraphQL</span>
                <br/>
                <span>MySQL</span>
                <br/>
                <span>MongoDB</span>
              </div>
              <div className="column is-hidden-tablet is-hidden-mobile"/>
              <div className="column is-2">
                <strong className="shadow is-info">CLOUD</strong>
                <br/>
                <br/>
                <span>AWS</span>
                <br/>
                <span>IBM Cloud</span>
                <br/>
                <span>Linux / Unix</span>
                <br/>
                <span>Git</span>
                <br/>
                <span>CI / CD</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Skills
