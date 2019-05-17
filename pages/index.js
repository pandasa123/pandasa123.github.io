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
  const [useDarkMode, setDarkMode] = useState(true)
  useEffect(() => {
    let hour = new Date().getHours()
    if (hour > 6 && hour < 19) {
      setDarkMode(false)
      document.getElementById('switchRoundedSuccess').checked = false
    } else {
      document.getElementById('switchRoundedSuccess').checked = true
    }
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
