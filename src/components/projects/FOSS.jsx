import React, { Fragment } from 'react'
import ProductCard from '../ProductCard'
import Container from '../Container'

const FOSS = ({ fabric, reactSVG }) => {
	return (
		<Fragment>
			<Container classes="pt-6 pb-4 text-lg font-bold text-gray-700 leading-snug sm:text-xl">
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
		</Fragment>
	)
}

export default FOSS
