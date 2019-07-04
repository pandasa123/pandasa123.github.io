import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
// import LandingHero from '../components/landing/LandingHero'
import Footer from '../components/Footer'
import 'typeface-roboto'

const globalStyle = {
	fontFamily:
		'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
}

const ProjectsPage = () => {
	return (
		<div style={globalStyle} className={'bg-white'}>
			<SEO
				title="Sanket Panda Projects"
				keywords={['Sanket Panda', 'Sanket', 'Panda', 'Projects']}
			/>
			<Header selected='Projects' />
            <div className='h-screen'></div>
			{/* <LandingHero /> */}
            <Footer />
		</div>
	)
}

export default ProjectsPage
