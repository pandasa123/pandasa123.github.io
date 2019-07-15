import React, { useContext } from 'react'
import Container from '../Container'
import ThemeContext from '../utils/ThemeContext'
import classNames from 'classnames'
// import Img from 'gatsby-image'
// import getNavigationImage from '../hooks/getNavigationImage'

const ContactHero = () => {
	// const profileImage = getNavigationImage()

	const theme = useContext(ThemeContext)

	const containerClasses = classNames({
		'pt-24': true,
		'md:pt-28': true,
		'lg:pt-32': true,
		'text-3xl': true,
		'sm:text-4xl': true,
		'md:text-5xl': true,
		'leading-snug': true,
		'font-bold': true,
		'text-gray-500': true,
		'h-screen': true,
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	return (
		<Container classes={containerClasses}>
			{/*<Img*/}
			{/*	className={'w-32 mx-auto md:w-48'}*/}
			{/*	title="Profile Image"*/}
			{/*	alt="Profile Image"*/}
			{/*	fluid={profileImage}*/}
			{/*/>*/}
			<a href={'mailto:pandasa@umich.edu'}>
				<h1 className={'pt-8'}>
					Send me an email <strong className={'text-blue-500'}>pandasa@umich</strong>,
				</h1>
			</a>
			<br/>
			<a href={'https://github.com/pandasa123'}>
				<h2>
					Checkout my Github <strong className={'text-blue-500'}>@pandasa123</strong>,
				</h2>
			</a>
			<br/>
			<a href={'https://linkedin.com/in/sanketpanda/'}>
				<h2>
					Connect with me <strong className={'text-blue-500'}>/in/sanketpanda</strong>,
				</h2>
			</a>
			<br/>
			<a href={'https://sanket-panda-resume.s3.amazonaws.com/SanketPandaResume.pdf'}>
				<h2>
					And save my <strong className={'text-blue-500'}>resume</strong>
				</h2>
			</a>
		</Container>
	)
}

export default ContactHero
