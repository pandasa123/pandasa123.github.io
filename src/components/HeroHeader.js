import React from 'react'

const HeroHeader = () => {
	return (
		<div className="pl-6 pt-4 h-48 lg:h-56 xl:h-64 md:pl-8 lg:pl-12">
			<h1 className="text-4xl lg:text-5xl xl:text-6xl">
				Hello! I'm Sanket!
			</h1>
			<h2
				id="hero_name"
				className="pt-3 text-2xl lg:text-3xl xl:text-4xl lg:pt-1"
			>
				I'm a front-end developer
			</h2>
			<h3 className="pt-5 text-md lg:text-lg xl:text-xl">
				<span className="font-semibold">Projects </span>
				<span className="text-gray-500">/ Resume / About</span>
			</h3>
		</div>
	)
}

export default HeroHeader
