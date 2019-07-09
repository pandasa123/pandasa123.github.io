import React, { useContext } from 'react'
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Container from './Container'
import ThemeContext from './utils/ThemeContext'
import classNames from 'classnames'

const Footer: React.FunctionComponent = () => {
	const theme = useContext(ThemeContext)

	const footerClasses = classNames({
		'bg-blue-500': theme === 'light',
		'bg-gray-900': theme === 'dark',
	})

	return (
		<footer className={footerClasses}>
			<Container classes={'flex justify-between text-sm p-4 md:p-8'}>
				<p className="text-white">Created by Sanket Panda</p>
				<p>
					<AniLink fade to="/contact/" className="font-bold no-underline text-white">
						Contact Me
					</AniLink>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
