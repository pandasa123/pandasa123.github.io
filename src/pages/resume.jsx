import React, { useState } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FontStyle from '../components/utils/FontStyle'
import 'typeface-roboto'
import Container from '../components/Container'
import Experience from '../components/resume/Experience'
import TimeTheme from '../components/utils/TimeTheme'
import { ThemeProvider } from '../components/utils/ThemeContext'

const ResumePage = () => {
	const [theme] = useState(TimeTheme)
	return (
		<ThemeProvider value={theme}>
			<section style={FontStyle} className={'bg-white'}>
				<SEO
					title="Sanket Panda Resume"
					keywords={['Sanket Panda Resume', 'Sanket', 'Panda', 'Resume']}
				/>
				<Navbar selected="Resume"/>
				<Container classes="pt-24 font-bold text-gray-500 leading-snug">
					<h1 className={'text-blue-500 text-3xl sm:text-4xl md:text-5xl'}>Resume</h1>
					<h2 className={'pt-3 text-gray-700 text-md sm:text-lg md:text-xl'}>
						Where I've Worked
					</h2>
				</Container>
				<Experience/>
				<br/>
				<Footer/>
			</section>
		</ThemeProvider>
	)
}

export default ResumePage
