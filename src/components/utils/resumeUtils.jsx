import React from 'react'

const ParagraphEmphasis = props => {
	return <strong className={'text-blue-800 font-semibold'}>{props.children}</strong>
}

const Paragraph = props => {
	return <p className={'pt-1 text-md font-light text-gray-800 md:text-lg'}>{props.children}</p>
}

const Date = props => {
	return <h4 className={'pt-1 text-sm text-gray-600 md:text-md'}>{props.children}</h4>
}

const Position = ({ company, position }) => {
	return (
		<h3 className={'text-xl text-gray-500 md:text-2xl'}>
			<strong className={'text-blue-500'}>{company}</strong>: {position}
		</h3>
	)
}

const ParagraphContainer = props => {
	return <div className={'py-4'}>{props.children}</div>
}

export { Date, Paragraph, ParagraphEmphasis, ParagraphContainer, Position }
