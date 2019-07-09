import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import classNames from 'classnames'
import { ThemeType } from './ThemeType'

interface IUtils {
	children?: any
}

interface IPosition {
	company: string,
	position: string
}

const ParagraphEmphasis: React.FunctionComponent<IUtils> = ({ children }) => {
	const theme: ThemeType = useContext(ThemeContext)
	const emphasisClasses: string = classNames({
		'font-semibold': true,
		'text-blue-800': theme === 'light',
		'text-blue-600': theme === 'dark',
	})
	return <strong className={emphasisClasses}>{children}</strong>
}

const Paragraph: React.FunctionComponent<IUtils> = ({ children }) => {
	const theme: ThemeType = useContext(ThemeContext)
	const paragraphClasses: string = classNames({
		'pt-1': true,
		'text-md': true,
		'md:text-lg': true,
		'font-light': true,
		'text-gray-800': theme === 'light',
		'text-gray-400': theme === 'dark',
	})
	return <p className={paragraphClasses}>{children}</p>
}

const Date: React.FunctionComponent<IUtils> = ({ children }) => {
	const theme: ThemeType = useContext(ThemeContext)
	const dateClasses: string = classNames({
		'pt-1': true,
		'text-sm': true,
		'md:text-md': true,
		'text-gray-600': theme === 'light',
		'text-gray-400': theme === 'dark',
	})
	return <h4 className={dateClasses}>{children}</h4>
}

const Position: React.FunctionComponent<IPosition> = ({ company, position }) => {
	const theme: ThemeType = useContext(ThemeContext)
	const positionClasses: string = classNames({
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

const ParagraphContainer: React.FunctionComponent<IUtils> = ({ children }) => {
	return <div className={'py-4'}>{children}</div>
}

export { Date, Paragraph, ParagraphEmphasis, ParagraphContainer, Position }
