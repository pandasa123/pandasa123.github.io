import React, { useContext } from 'react'
import ProductCard from '../ProductCard'
import Container from '../Container'
import ThemeContext from '../utils/ThemeContext'
import classNames from 'classnames'

const Personal = ({ helloPAM, museumDemo, msas }) => {
	const theme = useContext(ThemeContext)

	const containerClasses = classNames({
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	const headerClasses = classNames({
		'pt-6': true,
		'pb-4': true,
		'sm:text-xl': true,
		'text-lg': true,
		'font-bold': true,
		'leading-snug': true,
		'text-gray-700': theme === 'light',
		'text-gray-500': theme === 'dark',
	})

	return (
		<div className={containerClasses}>
			<Container classes={headerClasses}>
				<h2>Personal Projects</h2>
			</Container>
			<Container classes={'flex flex-wrap -mx-3'}>
				<ProductCard
					title={'Hello PAM!'}
					description={
						'As a developer, I type sudo...a lot more than I should admittedly. So, rather than input a password, I added Windows Hello to WSL!'
					}
					image={helloPAM}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Visitor Video Demographics'}
					description={
						'After taking a Museum Studies course, I started to wonder...”how can a museum visitor’s experience be enhanced through technology?” and volía 🏆'
					}
					image={museumDemo}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Women’s Field Hockey Viz'}
					description={
						'Winner of Michigan Sports Analytics Hackathon, this visualisation allowed field hockey coaches to understand player performance over a season 🏆'
					}
					image={msas}
					linkTitle={'Learn More'}
					link="/"
				/>
			</Container>
		</div>
	)
}

export default Personal
