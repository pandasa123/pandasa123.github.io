import React from 'react'
import Fade from 'react-reveal/Fade'

const Skills = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade delayIn="800" distance="200px">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-2">
              <div className="column is-3-widescreen columnHide"/>
              <div className="column is-3">
                <p className="has-text-link title is-size-5">SKILLS</p>
              </div>
              <div className="column web">
                <strong className="shadow is-success">FRONTEND</strong>
                <br/><br/>
                <span>JavaScript</span>
                <br/>
                <span>TypeScript</span>
                <br/>
                <span>React</span>
                <br/>
                <span>Vue</span>
                <br/>
                <span>D3.js</span>
                <br/>
                <span>ML.js</span>
              </div>
              <div className="column">
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
              <div className="column">
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
              <div className="column is-3-widescreen columnHide"/>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Skills
