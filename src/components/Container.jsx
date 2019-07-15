import React from 'react'

const Container = props => {
	return <section className={'px-6 md:px-12 lg:px-16 ' + props.classes}>{props.children}</section>
}

export default Container
