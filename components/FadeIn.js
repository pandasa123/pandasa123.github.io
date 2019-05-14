import React from 'react'
import Fade from 'react-reveal/Fade'

const FadeIn = children => {
  return (
    <Fade delayIn="800" distance="100px">
      {children}
    </Fade>
  )
}

export default FadeIn
