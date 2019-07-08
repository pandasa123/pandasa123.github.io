import React, { useContext } from 'react'
import Container from '../Container'
import ThemeContext from '../utils/ThemeContext'
import classNames from 'classnames'

const ProjectHeader = () => {
	const theme = useContext(ThemeContext)

	const containerClasses = classNames({
		'pt-24': true,
		'text-3xl': true,
		'sm:text-4xl': true,
		'md:text-5xl': true,
		'font-bold': true,
		'text-gray-500': true,
		'leading-snug': true,
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	return (
		<Container classes={containerClasses}>
			<h1 className={'text-blue-500'}>My Projects</h1>
		</Container>
	)
}

export default ProjectHeader
