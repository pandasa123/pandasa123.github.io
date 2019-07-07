import React, { useContext } from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import classNames from 'classnames'
import Container from './Container'
import ThemeContext from './utils/ThemeContext'
import getNavigationImage from './hooks/getNavigationImage'

const Navbar = ({ selected }) => {
	const navImage = getNavigationImage()
	const theme = useContext(ThemeContext)

	const containerClasses = classNames({
		'py-4': true,
		'w-full': true,
		'h-16': true,
		'flex': true,
		'flex-row': true,
		'fixed': true,
		'shadow-md': true,
		'z-50': true,
		'bg-white': theme === 'light',
		'bg-gray-700': theme === 'dark',
	})

	return (
		<Container classes={containerClasses}>
			<AniLink fade to="/contact/">
				<Img
					className={'w-8 block'}
					title="Contact Page"
					alt="Contact Page"
					fluid={navImage}
				/>
			</AniLink>
			<span className={'font-bold text-l pl-4 mt-1'}>
				<AniLink
					fade
					to="/"
					className={
						selected === 'Overview'
							? 'text-blue-500 inline-block pr-4'
							: 'text-gray-300 inline-block pr-4'
					}
				>
					Overview
				</AniLink>
				<AniLink
					fade
					to="/projects/"
					className={
						selected === 'Projects'
							? 'text-blue-500 inline-block pr-4'
							: 'text-gray-300 inline-block pr-4'
					}
				>
					Projects
				</AniLink>
				<AniLink
					fade
					to="/resume/"
					className={
						selected === 'Resume'
							? 'text-blue-500 inline-block'
							: 'text-gray-300 inline-block'
					}
				>
					Resume
				</AniLink>
			</span>
		</Container>
	)
}

export default Navbar
