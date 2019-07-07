import React, { useContext } from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ThemeContext from './utils/ThemeContext'
import classNames from 'classnames'

const ProductCard = ({ title, description, image, linkTitle, link }) => {
	const theme = useContext(ThemeContext)
	const cardClasses = classNames({
		'flex': true,
		'flex-1': true,
		'flex-col': true,
		'rounded-lg': true,
		'shadow-md': true,
		'transition': true,
		'overflow-hidden': true,
		'bg-white': theme === 'light',
		'bg-gray-700': theme === 'dark',
	})

	const cardHeaderClasses = classNames({
		'mb-4': true,
		'text-md': true,
		'sm:text-lg': true,
		'text-blue-700': theme === 'light',
		'text-blue-400': theme === 'dark',
	})

	const cardDescriptionClasses = classNames({
		'mb-4': true,
		'text-sm': true,
		'sm:text-md': true,
		'text-gray-600': theme === 'light',
		'text-gray-400': theme === 'dark',
	})

	return (
		<div className={'w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8'}>
			<AniLink fade to={link} className={cardClasses}>
				<Img fluid={{ ...image }} alt={title} objectFit="cover"/>
				<div className={'p-6 flex-1 flex flex-col justify-between'}>
					<h3 className={cardHeaderClasses}>{title}</h3>
					<span className={cardDescriptionClasses}>{description}</span>
					{/*<p className={'inline-flex items-center'}>*/}
					{/*	<span className={'text-xs text-blue-500 mr-2 sm:text-sm'}>{linkTitle}</span>*/}
					{/*	<svg*/}
					{/*		className={'h-3 w-3 mb-1 text-blue-500 fill-current'}*/}
					{/*		xmlns="http://www.w3.org/2000/svg"*/}
					{/*		viewBox="0 0 16 16"*/}
					{/*	>*/}
					{/*		<path*/}
					{/*			d="M14 3.41l-7.3 7.3a1 1 0 0 1-1.4-1.42L12.58 2H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.41zM12 11a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a1 1 0 1 1 0 2H2v10h10v-3z"/>*/}
					{/*	</svg>*/}
					{/*</p>*/}
				</div>
			</AniLink>
		</div>
	)
}

export default ProductCard
