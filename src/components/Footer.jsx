import React from 'react'
import Container from './Container'

const Footer = () => {
	return (
		<footer className="bg-blue-500">
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
