import React from 'react'
import Experience from '../components/resume/Experience'
import Layout from '../components/Layout'
import ResumeHeader from '../components/resume/ResumeHeader'
import SkillsHeader from '../components/resume/SkillsHeader'
import Skills from '../components/resume/Skills'

const ResumePage = () => {
	return (
		<Layout
			selectedPage={'Resume'}
			title="Sanket Panda Resume"
			keywords={['Sanket Panda Resume', 'Sanket', 'Panda', 'Resume']}
		>
			<ResumeHeader />
			<Experience />
			<SkillsHeader/>
			<Skills/>
		</Layout>
	)
}

export default ResumePage
