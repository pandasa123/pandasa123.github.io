import React, {useEffect, useState} from 'react'
import '../styles/bulma.scss'

import Hello from '../components/Hello'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import ViewportHeader from '../components/ViewportHeader'

// TODO: Sentiment / Demographic Video Capture, Hello PAM!, and MSAS for featured

const Index = () => {
  const [useDarkMode, setDarkMode] = useState(true)
  console.log(useDarkMode)
  useEffect(() => {
    let hour = new Date().getHours()
    if (hour > 7 && hour < 19) {
      setDarkMode(false)
    }
    document.querySelector('html').style.backgroundColor = (useDarkMode === false) ? 'hsl(0, 0%, 21%)' : 'white'
  }, [])
  return (
    <div>
      <ViewportHeader/>
      <Header toggle={setDarkMode} theme={useDarkMode}/>
      <Hello theme={useDarkMode}/>
      <Background theme={useDarkMode}/>
      <Skills theme={useDarkMode}/>
      <Experience theme={useDarkMode}/>
      <Projects theme={useDarkMode}/>
      <Footer theme={useDarkMode}/>
    </div>
  )
}

export default Index
