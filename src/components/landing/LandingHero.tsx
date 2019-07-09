import React, { useContext } from 'react'
import Container from '../Container'
import ThemeContext from '../utils/ThemeContext'
import classNames from 'classnames'
import { ThemeType } from '../utils/ThemeType'

const LandingHero: React.FunctionComponent = () => {
	const theme: ThemeType = useContext(ThemeContext)
	const containerClasses: string = classNames({
		'pt-24': true,
		'md:pt-28': true,
		'lg:pt-32': true,
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
			<h1>
				Hi! I'm <strong className={'text-blue-500'}>Sanket Panda</strong>,
			</h1>
			<br/>
			<h2>
				<strong className={'text-blue-500'}>Technical Product Manager</strong>
			</h2>
			<br/>
			<h2>
				I'm studying CS at the{' '}
				<strong className={'text-blue-500'}>University of Michigan</strong>
			</h2>
			<br/>
			<h2>
				And working for <strong className={'text-blue-500'}>IBM Extreme Blue</strong>
			</h2>
		</Container>
	)
}

export default LandingHero
