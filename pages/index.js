import React, {useEffect, useState} from 'react'
import '../styles/main.scss'

import Hello from '../components/Hello'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Featured from '../components/Featured'
import Projects from '../components/Projects'
import ViewportHeader from '../components/ViewportHeader'

const Index = () => {
  const getTheme = () => {
    let hour = new Date().getHours()
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   return true
    // }
    return (hour < 6 || hour > 19)
  }

  const [useDarkMode, setDarkMode] = useState(getTheme())

  useEffect(() => {
    let darkMode = getTheme()
    document.getElementById('switchRoundedSuccess').checked = darkMode
    setDarkMode(darkMode)
  }, [])
  return (
    <div>
      <ViewportHeader/>
      <Header toggle={setDarkMode} theme={useDarkMode}/>
      <Hello theme={useDarkMode}/>
      <Background theme={useDarkMode}/>
      <Skills theme={useDarkMode}/>
      <Experience theme={useDarkMode}/>
      <Featured theme={useDarkMode}/>
      <Projects theme={useDarkMode}/>
      <Footer theme={useDarkMode}/>
    </div>
  )
}

export default Index
