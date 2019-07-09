import classNames from 'classnames'
import React, { useContext } from 'react'
import Container from '../Container'
import ThemeContext from '../utils/ThemeContext'
import { ThemeType } from '../utils/ThemeType'

const ResumeHeader: React.FunctionComponent = () => {
	const theme: ThemeType = useContext(ThemeContext)

	const containerClasses: string = classNames({
		'pt-24': true,
		'text-3xl': true,
		'sm:text-4xl': true,
		'md:text-5xl': true,
		'font-bold': true,
		'text-gray-500': true,
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	// const headerClasses = classNames({
	// 	'py-2': true,
	// 	'text-md': true,
	// 	'sm:text-lg': true,
	// 	'md:text-xl': true,
	// 	'text-gray-700': theme === 'light',
	// 	'text-gray-500': theme === 'dark',
	// })

	return (
		<Container classes={containerClasses}>
			<h1 className={'text-blue-500'}>Resume</h1>
			{/*<h2 className={headerClasses}>Where I've Worked</h2>*/}
		</Container>
	)
}

export default ResumeHeader
