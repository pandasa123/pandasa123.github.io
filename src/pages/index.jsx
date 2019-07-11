import React from 'react'
import LandingHero from '../components/landing/LandingHero'
import FeaturedProjects from '../components/landing/FeaturedProjects'
import Layout from '../components/Layout'

const IndexPage = () => {
	return (
		<Layout
			selectedPage={'Overview'}
			title={'Sanket Panda Portfolio'}
			keywords={['Sanket Panda Portfolio', 'Sanket Panda', 'Sanket', 'Panda', 'Portfolio']}
		>
			<LandingHero />
			<FeaturedProjects />
		</Layout>
	)
}

export default IndexPage
