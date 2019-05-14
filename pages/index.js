import React from 'react'
import '../styles/bulma.scss'

import Hello from '../components/Hello'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import ViewportHeader from '../components/ViewportHeader'

// TODO: Add favicon

let theme = false
const toggleTheme = (newTheme) => {
  theme = !newTheme
}

class Index extends React.Component {
  componentDidMount() {
    document.querySelector('html').style.backgroundColor = (theme === true) ? 'hsl(0, 0%, 21%)' : 'white'
  }

  render() {
    return (
      <div>
        <ViewportHeader/>
        <Header toggle={toggleTheme} theme={theme}/>
        <Hello theme={theme}/>
        <Background theme={theme}/>
        <Skills theme={theme}/>
        <Experience theme={theme}/>
        <Footer theme={theme}/>
      </div>
    )
  }
}

export default Index
