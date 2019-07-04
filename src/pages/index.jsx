import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import LandingHero from '../components/landing/LandingHero'
import FeaturedProjects from '../components/landing/FeaturedProjects'
import Footer from '../components/Footer'
import FontStyle from '../components/utils/FontStyle'
import 'typeface-roboto'

const IndexPage = () => {
	return (
		<div style={FontStyle} className={'bg-white'}>
			<SEO
				title="Sanket Panda Portfolio"
				keywords={['Sanket Panda', 'Sanket', 'Panda', 'Portfolio']}
			/>
			<Header selected="Overview"/>
			<LandingHero/>
			<FeaturedProjects/>
			<Footer/>
		</div>
	)
}

export default IndexPage
