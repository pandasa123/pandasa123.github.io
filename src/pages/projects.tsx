import React from 'react'
import Commercial from '../components/projects/Commercial'
import FOSS from '../components/projects/FOSS'
import Personal from '../components/projects/Personal'
import getAllProjects from '../components/hooks/getAllProjects'
import Layout from '../components/Layout'
import ProjectHeader from '../components/projects/ProjectHeader'

const ProjectsPage: React.FunctionComponent = () => {
	const {
		hermes,
		dieselLabs,
		fabric,
		helloPAM,
		msas,
		museumDemo,
		reactSVG,
		umViz,
	}: any = getAllProjects()

	return (
		<Layout
			selectedPage={'Projects'}
			title={'Sanket Panda Projects'}
			keywords={['Sanket Panda Projects', 'Sanket', 'Panda', 'Projects']}
		>
			<ProjectHeader/>
			<Commercial hermes={hermes} dieselLabs={dieselLabs} umViz={umViz}/>
			<FOSS fabric={fabric} reactSVG={reactSVG}/>
			<Personal helloPAM={helloPAM} msas={msas} museumDemo={museumDemo}/>
		</Layout>
	)
}

export default ProjectsPage
