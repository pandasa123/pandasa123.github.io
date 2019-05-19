import React, {useContext} from 'react'
import Fade from 'react-reveal/Fade'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import ThemeContext from '../utilities/ThemeContext'

const Projects = () => {
  let {useDarkMode} = useContext(ThemeContext)
  return (
    <section className={useDarkMode ? 'hero is-medium is-dark' : 'hero is-medium'}>
      <div className="hero-body">
        <div className="container">

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-2 is-hidden-mobile"/>
              <div className="column is-2">
                <span className="has-text-info title is-size-4">THINGS I'VE BUILT</span>
              </div>

              <div className="column is-5">
                <strong>Sigma Stocks </strong>
                <a className="icon projectSet" href="https://github.com/bryce-s/SigmaStocks">
                  <OpenInNewIcon className="has-text-link"/>
                </a>
                <br/>
                <div className="is-hidden-tablet">
                    <span>April 2019</span>
                    <br/>
                </div>
                <span className="is-size-6">
                  <span>Sigma Stocks analyses stocks from close to open and predicts the best stocks to invest for the upcoming day using finance news aggregation and scoring paired with Linear Regression modelling</span>
                  <br/>
                  <span className="builtSet">
                    <span className="button is-outlined is-rounded is-small is-success">REACT</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">PYTHON</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">NLTK</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-purple">AWS</span>
                  </span>
                </span>
              </div>
              <div className="column is-hidden-mobile">
                <span>April 2019</span>
              </div>
            </div>
          </Fade>
          <br/>

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column is-5">
                <strong>Prime Canvas </strong>
                <a className="icon projectSet" href="https://github.com/pandasa123/primeCanvas">
                  <OpenInNewIcon className="has-text-link"/>
                </a>
                <br/>
                <div className="is-hidden-tablet">
                  <span>March 2019</span>
                  <br/>
                </div>
                <span className="is-size-6">
                  <span>Beautifully simple prime number visualisation using dynamic programming and efficient canvas drawing of grid of n<sup>2</sup> x n<sup>2</sup> numbers</span>
                  <br/>
                  <span className="builtSet">
                    <span className="button is-outlined is-rounded is-small is-success">P5</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">EXPRESS</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-purple">HEROKU</span>
                  </span>
                </span>
              </div>
              <div className="column is-hidden-mobile">
                <span>March 2019</span>
              </div>
            </div>
          </Fade>
          <br/>

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column is-5">
                <strong>Average Video Luminance </strong>
                <a className="icon projectSet" href="https://github.com/pandasa123/averageLuminance">
                  <OpenInNewIcon className="has-text-link"/>
                </a>
                <br/>
                <div className="is-hidden-tablet">
                  <span>May 2018</span>
                  <br/>
                </div>
                <span className="is-size-6">
                  <span>Calculating and visualising the average perceived luminance of Marvel and D.C. movies</span>
                  <br/>
                  <span className="builtSet">
                    <span className="button is-outlined is-rounded is-small is-success">TABLEAU</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">PYTHON</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">OPENCV</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">NUMPY</span>
                  </span>
                </span>
              </div>
              <div className="column is-hidden-mobile">
                <span>May 2018</span>
              </div>
            </div>
          </Fade>
          <br/>

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column is-5">
                <strong>BlockDRM </strong>
                <a className="icon projectSet" href="https://github.com/pandasa123/BlockDRM">
                  <OpenInNewIcon className="has-text-link"/>
                </a>
                <br/>
                <div className="is-hidden-tablet">
                  <span>February 2018</span>
                  <br/>
                </div>
                <span className="is-size-6">
                  <span>Built during the Bosch / Texas Instruments Makeathon, BlockDRM aimed to solve DRM authenticity through the power of Blockchain. Our proof of concept featured a rudimentary game library whose collection can be expanded and shared</span>
                  <br/>
                  <span className="builtSet">
                    <span className="button is-outlined is-rounded is-small is-success">QT5</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">HYPERLEDGER</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-danger">REST</span>
                  </span>
                </span>
              </div>
              <div className="column is-hidden-mobile">
                <span>February 2018</span>
              </div>
            </div>
          </Fade>
          <br/>

          <Fade delayIn="800" duration={1200} distance="0px">
            <div className="columns is-size-5">
              <div className="column is-4 is-hidden-mobile"/>
              <div className="column is-5">
                <strong>Alexa Kids Word Trainer </strong>
                <a className="icon projectSet" href="https://github.com/pandasa123/AlexaVowelTraining">
                  <OpenInNewIcon className="has-text-link"/>
                </a>
                <br/>
                <div className="is-hidden-tablet">
                  <span>January 2018</span>
                  <br/>
                </div>
                <span className="is-size-6">
                  <span>Using Abstract Relational Concepts and Levenshtein distance algorithm, Word Trainer teaches children how to identify vowels and consonants through the juxtaposition of two words</span>
                  <br/>
                  <span className="builtSet">
                    <span className="button is-outlined is-rounded is-small is-danger">PYTHON</span>&nbsp;
                    <span className="button is-outlined is-rounded is-small is-purple">AWS</span>
                  </span>
                </span>
              </div>
              <div className="column is-hidden-mobile">
                <span>January 2018</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Projects
