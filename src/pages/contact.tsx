import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import Layout from '../components/Layout'

const ContactPage: React.FunctionComponent = () => {
	return (
		<Layout
			selectedPage={'Contact'}
			title={'Sanket Panda Contact'}
			keywords={['Sanket Panda Contact', 'Sanket', 'Panda', 'Contact']}
		>
			<ContactHero/>
		</Layout>
	)
}

export default ContactPage
