import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import classNames from 'classnames'

const ParagraphEmphasis = ({ children }) => {
	const theme = useContext(ThemeContext)
	const emphasisClasses = classNames({
		'font-semibold': true,
		'text-blue-800': theme === 'light',
		'text-blue-600': theme === 'dark',
	})
	return <strong className={emphasisClasses}>{children}</strong>
}

const Paragraph = ({ children }) => {
	const theme = useContext(ThemeContext)
	const paragraphClasses = classNames({
		'pt-1': true,
		'text-md': true,
		'md:text-lg': true,
		'font-light': true,
		'text-gray-800': theme === 'light',
		'text-gray-400': theme === 'dark',
	})
	return <p className={paragraphClasses}>{children}</p>
}

const Date = ({ children }) => {
	const theme = useContext(ThemeContext)
	const dateClasses = classNames({
		'pt-1': true,
		'text-sm': true,
		'md:text-md': true,
		'text-gray-600': theme === 'light',
		'text-gray-400': theme === 'dark',
	})
	return <h4 className={dateClasses}>{children}</h4>
}

const Position = ({ company, position }) => {
	const theme = useContext(ThemeContext)
	const positionClasses = classNames({
		'text-xl': true,
		'md:text-2xl': true,
		'text-gray-500': theme === 'light',
		'text-gray-400': theme === 'dark',
	})
	return (
		<h3 className={positionClasses}>
			<strong className={'text-blue-500'}>{company}</strong>: {position}
		</h3>
	)
}

const SkillsTitle = ({ category, skills }) => {
	const theme = useContext(ThemeContext)
	const positionClasses = classNames({
		'text-lg': true,
		'md:text-xl': true,
		'text-gray-500': theme === 'light',
		'text-gray-400': theme === 'dark',
	})
	return (
		<h3 className={positionClasses}>
			<strong className={'text-blue-500'}>{category}</strong>: {skills}
		</h3>
	)
}


const ParagraphContainer = ({ children }) => {
	return <div className={'py-4'}>{children}</div>
}

export { Date, Paragraph, ParagraphEmphasis, ParagraphContainer, Position, SkillsTitle }
