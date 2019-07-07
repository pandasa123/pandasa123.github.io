import React from 'react'
import { Date, Paragraph, ParagraphContainer, ParagraphEmphasis, Position } from '../../utils/resumeUtils'

const DieselLabs = () => {
	return (
		<ParagraphContainer>
			<Position company={'Diesel Labs'} position={'Software Engineer'}/>
			<Date>May 2018 - August 2019</Date>
			<Paragraph>
				Built a visualisation that demonstrated Diesel Labs’ data intelligence using{' '}
				<ParagraphEmphasis>React</ParagraphEmphasis>,{' '}
				<ParagraphEmphasis>Redux</ParagraphEmphasis>, and{' '}
				<ParagraphEmphasis>Scala</ParagraphEmphasis>. Saved 150+ hours by building an Excel
				data export API for clients using <ParagraphEmphasis>APACHE POI</ParagraphEmphasis>,{' '}
				<ParagraphEmphasis>React</ParagraphEmphasis>, and{' '}
				<ParagraphEmphasis>Redux</ParagraphEmphasis>. Delivered onboarding experience for
				new clients using React and Redux
			</Paragraph>
		</ParagraphContainer>
	)
}

export default DieselLabs
