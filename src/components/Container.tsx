import React from 'react'

interface IContainer {
	classes: string
	children?: any
}

const Container: React.FunctionComponent<IContainer> = ({ classes, children }) => {
	return <section className={'px-6 md:px-12 lg:px-16 ' + classes}>{children}</section>
}

export default Container
