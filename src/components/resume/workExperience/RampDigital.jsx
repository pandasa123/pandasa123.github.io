import React from 'react'
import { Date, Paragraph, ParagraphEmphasis, Position } from '../../utils/resumeUtils'

const RampDigital = () => {
	return (
		<div className={'py-8'}>
			<Position company={'Ramp.Digital'} position={'Software Engineer'}/>
			<Date>June 2017 - September 2017</Date>
			<Paragraph>
				Designed a <ParagraphEmphasis>NodeJS</ParagraphEmphasis> /{' '}
				<ParagraphEmphasis>MQTT</ParagraphEmphasis> load balancer application to test
				various IoT solutions. Built a scalable dashboard to monitor and manage IoT
				solutions
			</Paragraph>
		</div>
	)
}

export default RampDigital
