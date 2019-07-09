import classNames from 'classnames'
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React, { useContext } from 'react'
import Container from './Container'
import ThemeContext from './utils/ThemeContext'

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
					<AniLink
						fade={true}
						to="/contact/"
						className="font-bold no-underline text-white"
					>
						Contact Me
					</AniLink>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
