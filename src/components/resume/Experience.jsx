import React from 'react'
import Container from '../Container'
import IBM from './workExperience/IBM'
import UM from './workExperience/UM'
import DieselLabs from './workExperience/DieselLabs'
import RampDigital from './workExperience/RampDigital'

const Experience = () => {
	return (
		<Container classes={'leading-loose'}>
			<IBM/>
			<UM/>
			<DieselLabs/>
			<RampDigital/>
		</Container>
	)
}

export default Experience
