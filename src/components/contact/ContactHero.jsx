import React from 'react'
import Container from '../Container'
// import Img from 'gatsby-image'
// import getNavigationImage from '../hooks/getNavigationImage'

const ContactHero = () => {
	// const profileImage = getNavigationImage()

	return (
		<Container
			classes="pt-24 text-3xl font-bold text-gray-500 leading-snug sm:text-4xl md:pt-28 md:text-5xl lg:pt-32">
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
					And save my <strong className={'text-blue-500'}>Resume</strong>
				</h2>
			</a>
		</Container>
	)
}

export default ContactHero
