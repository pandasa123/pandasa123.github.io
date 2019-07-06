import React, { Fragment } from 'react'
import ProductCard from '../ProductCard'
import Container from '../Container'

const Commercial = () => {
	return (
		<Fragment>
			<Container classes="pt-6 pb-4 text-lg font-bold text-gray-700 leading-snug sm:text-xl">
				<h2>Commercial Projects</h2>
			</Container>
			<Container classes={'flex flex-wrap -mx-3'}>
				<ProductCard
					title={'IBM Hermes for Salesforce'}
					description={
						'Hermes enhances the Salesforce Support Agent experience with Idle Auto Logout and Enchanced Desktop Notifications!'
					}
					// image={hermes}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Diesel Labs T-SNE Viz'}
					description={
						'With Diesel Labs’ huge data pipeline, my T-SNE Visualisation helped new clients understand how data was connected and how it could help them'
					}
					// image={dieselLabs}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'UM Center for Ergonomics Viz'}
					description={
						'Designing products is hard. My tool allows clients to accomodate mobility impaired clients by visualising physical layout design constraints'
					}
					// image={fabric}
					linkTitle={'Learn More'}
					link="/"
				/>
			</Container>
		</Fragment>
	)
}

export default Commercial
