import React from 'react'
import Fade from 'react-reveal/Fade'

const Background = props => {
  return (
    <section className={props.theme ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade delayIn="800" distance="200px">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-1">
              <div className="column is-hidden-mobile"/>
              <div className="column is-3-tablet">
                <span className="has-text-info title is-size-5 text-right-until-mobile">BACKGROUND</span>
              </div>
              <div className="column is-5">
                <p className="subtitle is-size-6">I'm an award-winning <span
                  className="shadow is-danger">fullstack</span> developer at <strong>IBM Extreme
                  Blue</strong>.
                  I'm also a senior studying Computer Science Engineering at the <strong>University of Michigan: Ann
                    Arbor</strong>
                  <br/><br/>
                  I love building cool, meaningful applications that leverage a variety of <span
                    className="shadow is-success">web</span> and <span
                    className="shadow is-info">cloud</span> technologies
                </p>
              </div>
              <div className="column"/>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Background
