import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import LandingHero from '../components/landing/LandingHero'
import 'typeface-roboto'

const globalStyle = {
	fontFamily:
		'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
}

const IndexPage = () => {
	return (
		<div style={globalStyle}>
			<SEO
				title="Home"
				keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
			/>
			<Header />
			<div className="h-screen">
				<LandingHero />
			</div>
			<div className="bg-blue-300 h-screen"></div>
		</div>
	)
}

export default IndexPage
