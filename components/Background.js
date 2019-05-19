import React, {useContext} from 'react'
import Fade from 'react-reveal/Fade'
import ThemeContext from '../utilities/ThemeContext'

const Background = () => {
  const {useDarkMode} = useContext(ThemeContext)
  return (
    <section className={useDarkMode ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <Fade cascade delayIn="800" duration={1200} distance="0px">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2">
                <span className="has-text-info title is-size-4 text-right-until-mobile">WHO AM I?</span>
              </div>
              <div className="column is-5">
                <span className="is-size-5">I'm an award-winning <span
                  className="shadow is-danger">fullstack</span> developer at <strong>IBM Extreme
                  Blue</strong>.
                  I'm also a senior studying Computer Science Engineering at the <strong>University of Michigan: Ann
                    Arbor</strong>
                  <br/><br/>
                  I love building cool, meaningful applications that leverage a variety of <span
                    className="shadow is-success">web</span> and <span
                    className="shadow is-purple">cloud</span> technologies
                </span>
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
