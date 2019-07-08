import React, { useState } from 'react'
import FontStyle from '../components/utils/FontStyle'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import 'typeface-roboto'
import ContactHero from '../components/contact/ContactHero'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/utils/ThemeContext'
import ThemeGenerator from '../components/utils/ThemeGenerator'
import classNames from 'classnames'

const ContactPage = () => {
	const [theme, setTheme] = useState(ThemeGenerator)

	const containerClasses = classNames({
		'h-screen': true,
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	return (
		<ThemeProvider value={theme}>
			<div style={FontStyle} className={containerClasses}>
				<SEO
					title={'Sanket Panda Contact'}
					keywords={['Sanket Panda Contact', 'Sanket', 'Panda', 'Contact']}
				/>
				<Navbar selected={'Contact'} setTheme={setTheme}/>
				<ContactHero/>
			</div>
			<Footer/>
		</ThemeProvider>
	)
}

export default ContactPage
