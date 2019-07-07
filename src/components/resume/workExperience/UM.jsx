import React from 'react'
import { Date, Paragraph, ParagraphContainer, ParagraphEmphasis, Position } from '../../utils/resumeUtils'

const UM = () => {
	return (
		<ParagraphContainer>
			<Position company={'University of Michigan'} position={'Research Assistant'}/>
			<Date>January 2019 - May 2019</Date>
			<Paragraph>
				Worked with Professor Clive D’Souza to build responsive mobility data visualisations
				using <ParagraphEmphasis>Bootstrap</ParagraphEmphasis>,{' '}
				<ParagraphEmphasis>D3.js</ParagraphEmphasis>, and{' '}
				<ParagraphEmphasis>MySQL</ParagraphEmphasis>. Implemented multi-variable models
				using <ParagraphEmphasis>LALOLib</ParagraphEmphasis>
				and <ParagraphEmphasis>ML.js</ParagraphEmphasis>
			</Paragraph>
		</ParagraphContainer>
	)
}

export default UM
