import React, { useState } from 'react'
import 'typeface-roboto'
import Footer from './Footer'
import Navbar from './Navbar'
import SEO from './SEO'
import FontStyle from './utils/FontStyle'
import { ThemeProvider } from './utils/ThemeContext'
import ThemeGenerator from './utils/ThemeGenerator'

interface ILayout {
	children?: any
	title: string
	keywords: string[]
	selectedPage: string
}

const Layout: React.FunctionComponent<ILayout> = ({ children, title, keywords, selectedPage }) => {
	const [theme, setTheme] = useState(ThemeGenerator)
	return (
		<ThemeProvider value={theme}>
			<div style={FontStyle}>
				<SEO title={title} keywords={keywords}/>
				<Navbar selected={selectedPage} setTheme={setTheme}/>
				{children}
				<Footer/>
			</div>
		</ThemeProvider>
	)
}

export default Layout
