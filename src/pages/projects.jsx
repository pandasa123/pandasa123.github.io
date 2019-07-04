import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
// import LandingHero from '../components/landing/LandingHero'
import Footer from '../components/Footer'
import FontStyle from '../components/FontStyle'
import 'typeface-roboto'

const ProjectsPage = () => {
	return (
		<section style={FontStyle} className={'bg-white'}>
			<SEO
				title="Sanket Panda Projects"
				keywords={['Sanket Panda', 'Sanket', 'Panda', 'Projects']}
			/>
			<Header selected="Projects"/>
			<div className="h-screen"/>
			{/* <LandingHero /> */}
			<Footer/>
		</section>
	)
}

export default ProjectsPage
