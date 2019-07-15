import React, { useContext } from 'react'
import Container from '../Container'
import ThemeContext from '../utils/ThemeContext'
import classNames from 'classnames'

const ResumeHeader = () => {
	const theme = useContext(ThemeContext)

	const containerClasses = classNames({
		'pt-8': true,
		'text-3xl': true,
		'sm:text-4xl': true,
		'md:text-5xl': true,
		'font-bold': true,
		'text-gray-500': true,
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	return (
		<Container classes={containerClasses}>
			<h1 className={'text-blue-500'}>Skills</h1>
		</Container>
	)
}

export default ResumeHeader
