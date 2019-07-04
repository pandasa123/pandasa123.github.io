import React from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
// import LandingHero from '../components/landing/LandingHero'
import Footer from '../components/Footer'
import FontStyle from '../components/utils/FontStyle'
import 'typeface-roboto'

const ProjectsPage = () => {
	return (
		<section style={FontStyle} className={'bg-white'}>
			<SEO
				title="Sanket Panda Projects"
				keywords={['Sanket Panda', 'Sanket', 'Panda', 'Projects']}
			/>
			<Navbar selected="Projects"/>
			<div className="h-screen"/>
			{/* <LandingHero /> */}
			<Footer/>
		</section>
	)
}

export default ProjectsPage
