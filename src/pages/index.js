import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import LandingHero from '../components/landing/LandingHero'
import FeaturedProjects from '../components/landing/FeaturedProjects'
import 'typeface-roboto'
import Footer from '../components/Footer';

const globalStyle = {
	fontFamily:
		'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
}

const IndexPage = () => {
	return (
		<div style={globalStyle} className={'bg-white'}>
			<SEO
				title="Home"
				keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
			/>
			<Header />
			<LandingHero />
			<FeaturedProjects />
            <Footer />
		</div>
	)
}

export default IndexPage
