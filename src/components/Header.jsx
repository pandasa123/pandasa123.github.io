import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			profileImage: file(relativePath: { eq: "Profile.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						base64
						tracedSVG
						aspectRatio
						src
						srcSet
						srcWebp
						srcSetWebp
						sizes
						originalImg
						originalName
					}
				}
			}
		}
	`)

	return (
		<section
			className={
				'px-4 py-4 w-full h-16 align-middle flex flex-row fixed shadow-md bg-white'
			}
		>
			<Img
				className={'w-8 block'}
				title="Contact Page"
				alt="Contact Page"
				fluid={data.profileImage.childImageSharp.fluid}
			/>
			<span className={'font-bold text-l pl-4 pt-1'}>
				<h1 className={'text-blue-500 inline-block pr-3'}>Overview</h1>
				<h1 className={'text-gray-300 inline-block pr-3'}>Projects</h1>
				<h1 className={'text-gray-300 inline-block pr-3'}>Resume</h1>
			</span>
		</section>
	)
}

export default Header
