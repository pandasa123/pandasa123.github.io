import React, { Fragment } from 'react'
import ProductCard from '../ProductCard'
import Container from '../Container'

const Personal = () => {
	return (
		<Fragment>
			<Container classes="pt-6 pb-4 text-lg font-bold text-gray-700 leading-snug sm:text-xl">
				<h2>Personal Projects</h2>
			</Container>
			<Container classes={'flex flex-wrap -mx-3'}>
				<ProductCard
					title={'Hello PAM!'}
					description={
						'As a developer, I type sudo...a lot more than I should admittedly. So, rather than input a password, I added Windows Hello to WSL!'
					}
					// image={helloPAM}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Visitor Video Demographics'}
					description={
						'After taking a Museum Studies course, I started to wonder...”how can a museum visitor’s experience be enhanced through technology?” and volía 🏆'
					}
					// image={visitorDemographics}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Women’s Field Hockey Viz'}
					description={
						'Winner of Michigan Sports Analytics Hackathon, this visualisation allowed field hockey coaches to understand player performance over a season 🏆'
					}
					// image={msas}
					linkTitle={'Learn More'}
					link="/"
				/>
			</Container>
		</Fragment>
	)
}

export default Personal
