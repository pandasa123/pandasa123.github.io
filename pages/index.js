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
  console.log('v1.2')
  const getTheme = () => {
    const hour = new Date().getHours()
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   return true
    // }
    console.log(hour)
    return (hour < 6 || hour > 19)
  }

  const [useDarkMode, setDarkMode] = useState(false)

  // useEffect(() => {
  //   const darkMode = getTheme()
  //   document.getElementById('switchRoundedSuccess').checked = darkMode
  //   setDarkMode(darkMode)
  // }, [])

  return (
    <section>
      <ViewportHeader/>
      <Header toggle={setDarkMode} theme={useDarkMode}/>
      <Hello theme={useDarkMode}/>
      <Background theme={useDarkMode}/>
      <Skills theme={useDarkMode}/>
      <Experience theme={useDarkMode}/>
      <Featured theme={useDarkMode}/>
      <Projects theme={useDarkMode}/>
      <Footer theme={useDarkMode}/>
    </section>
  )
}

export default Index
