import React from 'react'
import Experience from '../components/resume/Experience'
import Layout from '../components/Layout'
import ResumeHeader from '../components/resume/ResumeHeader'

const ResumePage: React.FunctionComponent = () => {
	return (
		<Layout
			selectedPage={'Resume'}
			title="Sanket Panda Resume"
			keywords={['Sanket Panda Resume', 'Sanket', 'Panda', 'Resume']}
		>
			<ResumeHeader/>
			<Experience/>
		</Layout>
	)
}

export default ResumePage
