import React, { useContext } from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import classNames from 'classnames'
import Container from './Container'
import ThemeContext from './utils/ThemeContext'
import getNavigationImage from './hooks/getNavigationImage'

const Navbar = ({ selected, setTheme }) => {
	const navImage = getNavigationImage()
	const theme = useContext(ThemeContext)

	const containerClasses = classNames({
		'py-4': true,
		'w-full': true,
		'h-16': true,
		flex: true,
		'flex-row': true,
		fixed: true,
		'shadow-md': true,
		'z-50': true,
		'bg-white': theme === 'light',
		'bg-gray-700': theme === 'dark',
	})

	const navImageClasses = classNames({
		'w-8': true,
		block: true,
		'rounded-full': true,
		'border-2': true,
		'border-indigo-600': theme === 'light',
		'border-yellow-600': theme === 'dark',
	})

	const overviewClasses = classNames({
		'inline-block': true,
		'pr-4': true,
		'text-blue-500': selected === 'Overview',
		'text-gray-300': selected !== 'Overview' && theme === 'light',
		'text-gray-500': selected !== 'Overview' && theme === 'dark',
	})

	const projectClasses = classNames({
		'inline-block': true,
		'pr-4': true,
		'text-blue-500': selected === 'Projects',
		'text-gray-300': selected !== 'Projects' && theme === 'light',
		'text-gray-500': selected !== 'Projects' && theme === 'dark',
	})

	const resumeClasses = classNames({
		'inline-block': true,
		'text-blue-500': selected === 'Resume',
		'text-gray-300': selected !== 'Resume' && theme === 'light',
		'text-gray-500': selected !== 'Resume' && theme === 'dark',
	})

	const themeChange = () => {
		if (theme === 'light') {
			sessionStorage.setItem('theme', 'dark')
			setTheme('dark')
		} else {
			sessionStorage.setItem('theme', 'light')
			setTheme('light')
		}
	}

	return (
		<Container classes={containerClasses}>
			<div onClick={themeChange}>
				<Img
					className={navImageClasses}
					title="Contact Page"
					alt="Contact Page"
					fluid={navImage}
				/>
			</div>
			<span className={'font-bold text-l pl-4 mt-1'}>
				<AniLink fade to="/" className={overviewClasses}>
					Overview
				</AniLink>
				<AniLink fade to="/projects/" className={projectClasses}>
					Projects
				</AniLink>
				<AniLink fade to="/resume/" className={resumeClasses}>
					Resume
				</AniLink>
			</span>
		</Container>
	)
}

export default Navbar
