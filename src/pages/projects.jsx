import React from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Commercial from '../components/projects/Commercial'
import Footer from '../components/Footer'
import FontStyle from '../components/utils/FontStyle'
import 'typeface-roboto'
import Container from '../components/Container'
import FOSS from '../components/projects/FOSS'
import Personal from '../components/projects/Personal'

const ProjectsPage = () => {
	return (
		<section style={FontStyle} className={'bg-white'}>
			<SEO
				title="Sanket Panda Projects"
				keywords={['Sanket Panda Projects', 'Sanket', 'Panda', 'Projects']}
			/>
			<Navbar selected="Projects"/>
			<Container classes="pt-24 text-3xl font-bold text-gray-500 leading-snug sm:text-4xl md:text-5xl">
				<h1 className={'text-blue-500'}>My Projects</h1>
			</Container>
			<Commercial/>
			<FOSS/>
			<Personal/>
			<Footer/>
		</section>
	)
}

export default ProjectsPage
