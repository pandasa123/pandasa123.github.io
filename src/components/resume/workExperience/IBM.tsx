import React from 'react'
import { Date, Paragraph, ParagraphContainer, ParagraphEmphasis, Position } from '../../utils/resumeUtils'

const IBM: React.FunctionComponent = () => {
	return (
		<ParagraphContainer>
			<Position
				company={'IBM Extreme Blue'}
				position={'Software Engineer'}
			/>
			<Date>May 2019 - August 2019</Date>
			<Paragraph>
				Designed and developed a modular extension architecture used to extend IBM’s
				SalesForce Live Agent Chat implementation. Led team to prioritise development
				targets and devise implementation options utilsing{' '}
				<ParagraphEmphasis>TypeScript</ParagraphEmphasis>,{' '}
				<ParagraphEmphasis>React</ParagraphEmphasis>,{' '}
				<ParagraphEmphasis>Bootstrap</ParagraphEmphasis>, and{' '}
				<ParagraphEmphasis>Browser Architecture</ParagraphEmphasis>
			</Paragraph>
		</ParagraphContainer>
	)
}

export default IBM
