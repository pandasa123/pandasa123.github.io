import React, {useEffect, useState} from 'react'
import '../styles/bulma.scss'

import Hello from '../components/Hello'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import ViewportHeader from '../components/ViewportHeader'

// TODO: Add favicon

const Index = () => {
  const [useDarkMode, setDarkMode] = useState(false)
  useEffect(() => {
    let hour = new Date().getHours()
    if (hour > 19 || hour < 8) {
      setDarkMode(true)
    }
    document.querySelector('html').style.backgroundColor = (useDarkMode === true) ? 'hsl(0, 0%, 21%)' : 'white'
  })
  return (
    <div>
      <ViewportHeader/>
      <Header toggle={setDarkMode} theme={useDarkMode}/>
      <Hello theme={useDarkMode}/>
      <Background theme={useDarkMode}/>
      <Skills theme={useDarkMode}/>
      <Experience theme={useDarkMode}/>
      <Footer theme={useDarkMode}/>
    </div>
  )
}

export default Index
