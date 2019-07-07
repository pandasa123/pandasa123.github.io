import React, { useContext } from 'react'
import Container from './Container'
import ThemeContext from './utils/ThemeContext'
import classNames from 'classnames'

const Footer = () => {
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
					<a
						href="https://github.com/pandasa123"
						className="font-bold no-underline text-white"
					>
						GitHub
					</a>
				</p>
			</Container>
		</footer>
	)
}

export default Footer
