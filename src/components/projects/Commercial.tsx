import classNames from 'classnames'
import React, { useContext } from 'react'
import Container from '../Container'
import ProductCard from '../ProductCard'
import ThemeContext from '../utils/ThemeContext'
import { ThemeType } from '../utils/ThemeType'

interface ICommercial {
	hermes: object
	dieselLabs: object
	umViz: object
}

const Commercial: React.FunctionComponent<ICommercial> = ({ hermes, dieselLabs, umViz }) => {
	const theme: ThemeType = useContext(ThemeContext)

	const containerClasses: string = classNames({
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	const headerClasses: string = classNames({
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
				<h2>Commercial Projects</h2>
			</Container>
			<Container classes={'flex flex-wrap -mx-3'}>
				<ProductCard
					title={'IBM Hermes for Salesforce'}
					description={
						'Hermes enhances the Salesforce Support Agent experience with Idle Auto Logout and Enchanced Desktop Notifications!'
					}
					image={hermes}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Diesel Labs T-SNE Viz'}
					description={
						'With Diesel Labs’ huge data pipeline, my T-SNE Visualisation helped new clients understand how data was connected and how it could help them'
					}
					image={dieselLabs}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'UM Center for Ergonomics Viz'}
					description={
						'Designing products is hard. My tool allows clients to accomodate mobility impaired clients by visualising physical layout design constraints'
					}
					image={umViz}
					linkTitle={'Learn More'}
					link="/"
				/>
			</Container>
		</div>
	)
}

export default Commercial
