import React, { useState } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import LandingHero from '../components/landing/LandingHero'
import FeaturedProjects from '../components/landing/FeaturedProjects'
import Footer from '../components/Footer'
import TimeTheme from '../components/utils/TimeTheme'
import { ThemeProvider } from '../components/utils/ThemeContext'
import FontStyle from '../components/utils/FontStyle'
import 'typeface-roboto'

const IndexPage = () => {
	const [theme] = useState(TimeTheme)
	return (
		<ThemeProvider value={theme}>
			<div style={FontStyle} className={'bg-white'}>
				<SEO
					title="Sanket Panda Portfolio"
					keywords={[
						'Sanket Panda Portfolio',
						'Sanket Panda',
						'Sanket',
						'Panda',
						'Portfolio',
					]}
				/>
				<Navbar selected="Overview"/>
				<LandingHero/>
				<FeaturedProjects/>
				<Footer/>
			</div>
		</ThemeProvider>
	)
}

export default IndexPage
