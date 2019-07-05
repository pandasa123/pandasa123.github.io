import React, { Fragment } from 'react'
import FontStyle from '../components/utils/FontStyle'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import 'typeface-roboto'
import ContactHero from '../components/contact/ContactHero'
import Footer from '../components/Footer'

const ContactPage = () => {
	return (
		<Fragment>
			<div style={FontStyle} className={'bg-white h-screen'}>
				<SEO
					title={'Sanket Panda Contact'}
					keywords={['Sanket Panda Contact', 'Sanket', 'Panda', 'Contact']}
				/>
				<Navbar selected={'Contact'}/>
				<ContactHero/>
			</div>
			<Footer/>
		</Fragment>
	)
}

export default ContactPage
