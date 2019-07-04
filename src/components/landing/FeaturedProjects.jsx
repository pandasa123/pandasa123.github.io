import React from 'react'
import ProductCard from '../ProductCard'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Container from '../Container'

const FeaturedProjects = () => {
	return (
		<Container classes="py-16">
			<div
				className={
					'flex justify-between border-b-2 border-grey-light mb-10'
				}
			>
				<h2
					className={
						'font-bold text-md text-blue-500 pb-2 border-b-2 border-blue-500 sm:text-lg'
					}
				>
					Featured Projects
				</h2>
				<AniLink
					fade
					to="/"
					className={'font-bold text-md text-gray-500 sm:text-lg'}
				>
					View All
				</AniLink>
			</div>
			<div className={'flex flex-wrap -mx-3'}>
				<ProductCard
					title={'IBM Hermes for Salesforce'}
					description={
						'Hermes enhances the Salesforce Support Agent experience with Idle Auto Logout and Enchanced Desktop Notifications!'
					}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Diesel Labs T-SNE Viz'}
					description={
						'With Diesel Labs’ huge data pipeline, my T-SNE Visualisation helped new clients understand how data was connected and how it could help them'
					}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'UM Center for Ergonomics Viz'}
					description={
						'Designing products is hard. My tool allows clients to accomodate mobility impaired clients by visualising physical layout design constraints'
					}
					linkTitle={'Learn More'}
					link="/"
				/>
			</div>
		</Container>
	)
}

export default FeaturedProjects
