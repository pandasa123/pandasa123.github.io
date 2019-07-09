import React, { useContext } from 'react'
import Container from '../Container'
import IBM from './workExperience/IBM'
import UM from './workExperience/UM'
import DieselLabs from './workExperience/DieselLabs'
import RampDigital from './workExperience/RampDigital'
import classNames from 'classnames'
import ThemeContext from '../utils/ThemeContext'
import { ThemeType } from '../utils/ThemeType'

const Experience: React.FunctionComponent = () => {
	const theme: ThemeType = useContext(ThemeContext)

	const containerClasses: string = classNames({
		'leading-loose': true,
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	return (
		<Container classes={containerClasses}>
			<div className={'max-w-7xl'}>
				<IBM/>
				<UM/>
				<DieselLabs/>
				<RampDigital/>
			</div>
		</Container>
	)
}

export default Experience
