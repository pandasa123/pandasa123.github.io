import React, { useState } from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import ThemeGenerator from '../components/utils/ThemeGenerator'
import Footer from './Footer'
import { ThemeProvider } from '../components/utils/ThemeContext'
import FontStyle from '../components/utils/FontStyle'
import 'typeface-roboto'

const Layout = ({ children, title, keywords, selectedPage }) => {
	const [theme, setTheme] = useState(ThemeGenerator)
	return (
		<ThemeProvider value={theme}>
			<div style={FontStyle}>
				<SEO title={title} keywords={keywords} />
				<Navbar selected={selectedPage} setTheme={setTheme} />
				{children}
				<Footer />
			</div>
		</ThemeProvider>
	)
}

export default Layout
