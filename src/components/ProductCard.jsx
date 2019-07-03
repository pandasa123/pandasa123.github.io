import React from 'react'

const ProductCard = ({ title, description, image, linkTitle, link }) => {
	return (
		<div className={'w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8'}>
			<a
				href="/"
				className={
					'bg-white rounded-lg shadow transition flex-1 flex flex-col overflow-hidden'
				}
			>
				{/* <div>
					<div className={'bg-cover aspect-16x9'}></div>
				</div> */}
				<div className={'p-6 flex-1 flex flex-col justify-between'}>
					<h3 className={'text-md text-blue-700 mb-4 sm:text-lg'}>
						{title}
					</h3>
					<span className={'text-sm text-gray-600 mb-4 sm:text-md'}>
						{description}
					</span>
					<p className={'inline-flex items-center'}>
						<span className={'text-xs text-blue-500 mr-2 sm:text-sm'}>
							{linkTitle}
						</span>
						<svg
							className={
								'h-3 w-3 mb-1 text-blue-500 fill-current'
							}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
						>
							<path d="M14 3.41l-7.3 7.3a1 1 0 0 1-1.4-1.42L12.58 2H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.41zM12 11a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a1 1 0 1 1 0 2H2v10h10v-3z"></path>
						</svg>
					</p>
				</div>
			</a>
		</div>
	)
}

export default ProductCard
