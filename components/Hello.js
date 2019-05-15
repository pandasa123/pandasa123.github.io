import React from 'react'

const Hello = props => {

//   #waving-hand {
//     transform: rotate(30deg);
//     font-size: 32px;
//     text-align: center;
//     animation: wave 600ms alternate infinite;
//     transform-origin: 50% 50%;
//     animation-timing-function: cubic-bezier(0.25,0,0.75,1)
//   }
//
// @keyframes wave {
//     0% {transform: rotate(-15deg);}
//     100% {transform: rotate(30deg);}
//   }

  // TODO: Add animations
  return (
    <section
      className={props.theme ? 'hero is-fullheight-with-navbar is-dark' : 'hero is-fullheight-with-navbar'}>
      <div className="hero-body">
        <div className="container">
          <h1 className="subtitle is-1">Hey there! <img className="emoji" src="../static/waving-hand.png"
                                                        draggable={false} style={{height: '3rem'}}
                                                        alt="waving hand emoji"/></h1>
          <h2 className="subtitle is-size-3" style={{maxWidth: '800px', paddingTop: '5%'}}>My name is <strong>Sanket
            Panda</strong>! I'm a&nbsp;
            <span className="shadow is-danger">fullstack</span> developer interested in <span
              className="shadow is-success">beautiful</span>, scalable
            applications built in the <span className="shadow is-info">cloud</span>! <img className="emoji"
                                                                                          src="../static/cloud.png"
                                                                                          draggable={false}
                                                                                          style={{
                                                                                            height: '2rem',
                                                                                            position: 'relative',
                                                                                            top: '5px',
                                                                                          }}
                                                                                          alt="cloud emoji"/>️</h2>
          <h3 className="subtitle is-size-3" style={{maxWidth: '800px', paddingTop: '20%'}}>
            Find out more about me! <img className="emoji"
                                         src="../static/point-down.png"
                                         draggable={false}
                                         style={{
                                           height: '2rem',
                                           position: 'relative',
                                           top: '5px',
                                         }}
                                         alt="pointing down emoji"/>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Hello
