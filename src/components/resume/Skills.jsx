import React, { useContext } from 'react'
import Container from '../Container'
import classNames from 'classnames'
import ThemeContext from '../utils/ThemeContext'
import { ParagraphContainer, SkillsTitle } from '../utils/resumeUtils'

const Skills = () => {
	const theme = useContext(ThemeContext)

	const containerClasses = classNames({
		'leading-loose': true,
		'pb-8': true,
		'bg-white': theme === 'light',
		'bg-gray-800': theme === 'dark',
	})

	return (
		<Container classes={containerClasses}>
			<div className={'max-w-7xl'}>
				<ParagraphContainer>
					<SkillsTitle category={'Frontend'}
								 skills={'JavaScript, TypeScript, React, Vue, D3.js, Browser Extensions'}/>
					<SkillsTitle category={'Backend'} skills={'NodeJS, C/C++, Python, Scala, REST, SQL, MongoDB'}/>
					<SkillsTitle category={'Cloud'}
								 skills={'Amazon Web Services, IBM Cloud, Linux / Unix, Git, CI / CD'}/>
				</ParagraphContainer>
			</div>
		</Container>
	)
}

export default Skills
