import classNames from 'classnames'
import React, { useContext } from 'react'
import Container from '../Container'
import ProductCard from '../ProductCard'
import ThemeContext from '../utils/ThemeContext'
import { ThemeType } from '../utils/ThemeType'

interface IFOSS {
	fabric: object
	reactSVG: object
}

const FOSS: React.FunctionComponent<IFOSS> = ({ fabric, reactSVG }) => {
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
				<h2>Free Open-Source Contributions</h2>
			</Container>
			<Container classes={'flex flex-wrap -mx-3'}>
				<ProductCard
					title={'Microsoft Fabric UI React'}
					description={
						'Microsoft Fabric UI library to build Fluent experiences. I refactored developer examples to create an easier adoption process'
					}
					image={fabric}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'React SVG-Loader Library'}
					description={
						'Beautiful SVG loaders wrapped into React components. I rewrote the entire library, reducing the size by 37% and added CI/CD, linting, etc'
					}
					image={reactSVG}
					linkTitle={'Learn More'}
					link="/"
				/>
			</Container>
		</div>
	)
}

export default FOSS
