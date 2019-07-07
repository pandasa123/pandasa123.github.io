import React, { useState } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Commercial from '../components/projects/Commercial'
import Footer from '../components/Footer'
import FontStyle from '../components/utils/FontStyle'
import 'typeface-roboto'
import Container from '../components/Container'
import FOSS from '../components/projects/FOSS'
import Personal from '../components/projects/Personal'
import getAllProjects from '../components/hooks/getAllProjects'
import { ThemeProvider } from '../components/utils/ThemeContext'
import TimeTheme from '../components/utils/TimeTheme'
import classNames from 'classnames'

const ProjectsPage = () => {
	const {
		hermes,
		dieselLabs,
		fabric,
		helloPAM,
		msas,
		museumDemo,
		reactSVG,
		umViz,
	} = getAllProjects()

	const [theme] = useState(TimeTheme)

	const containerClasses = classNames({
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	return (
		<ThemeProvider value={theme}>
			<section style={FontStyle} className={containerClasses}>
				<SEO
					title="Sanket Panda Projects"
					keywords={['Sanket Panda Projects', 'Sanket', 'Panda', 'Projects']}
				/>
				<Navbar selected="Projects"/>
				<Container classes="pt-24 text-3xl font-bold text-gray-500 leading-snug sm:text-4xl md:text-5xl">
					<h1 className={'text-blue-500'}>My Projects</h1>
				</Container>
				<Commercial hermes={hermes} dieselLabs={dieselLabs} umViz={umViz}/>
				<FOSS fabric={fabric} reactSVG={reactSVG}/>
				<Personal helloPAM={helloPAM} msas={msas} museumDemo={museumDemo}/>
				<br/>
				<Footer/>
			</section>
		</ThemeProvider>
	)
}

export default ProjectsPage
