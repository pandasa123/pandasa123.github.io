import React, {useState} from 'react'
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
import getTheme from '../utilities/getTheme'
import ThemeContext from '../utilities/ThemeContext'

const Index = () => {
  const [useDarkMode, setDarkMode] = useState(getTheme)
  return (
    <ThemeContext.Provider value={{useDarkMode: useDarkMode}}>
      <ViewportHeader/>
      <Header toggle={setDarkMode}/>
      <Hello/>
      <Background/>
      <Skills/>
      <Experience/>
      <Featured/>
      <Projects/>
      <Footer/>
    </ThemeContext.Provider>
  )
}

export default Index
