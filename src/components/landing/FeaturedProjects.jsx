import React from 'react'
import ProductCard from '../ProductCard'
import Container from '../Container'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const FeaturedProjects = () => {
	// noinspection Annotator
	const data = useStaticQuery(graphql`
        query {
            hermesImage: file(relativePath: { eq: "ProductPages/Hermes.png" }) {
                childImageSharp {
                    fluid {
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
            dieselLabs: file(relativePath: { eq: "ProductPages/DieselLabs.png" }) {
                childImageSharp {
                    fluid {
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
            fabric: file(relativePath: { eq: "ProductPages/Fabric.png" }) {
                childImageSharp {
                    fluid {
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
		<Container classes="py-16">
			<div className={'flex justify-between border-b-2 border-grey-light mb-10'}>
				<h2
					className={
						'font-bold text-md text-blue-500 pb-2 border-b-2 border-blue-500 sm:text-lg'
					}
				>
					Featured Projects
				</h2>
				<AniLink fade to="/" className={'font-bold text-md text-gray-500 sm:text-lg'}>
					View All
				</AniLink>
			</div>
			<div className={'flex flex-wrap -mx-3'}>
				<ProductCard
					title={'IBM Hermes for Salesforce'}
					description={
						'Hermes enhances the Salesforce Support Agent experience with Idle Auto Logout and Enchanced Desktop Notifications!'
					}
					image={data.hermesImage.childImageSharp.fluid}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Diesel Labs T-SNE Viz'}
					description={
						'With Diesel Labs’ huge data pipeline, my T-SNE Visualisation helped new clients understand how data was connected and how it could help them'
					}
					image={data.dieselLabs.childImageSharp.fluid}
					linkTitle={'Learn More'}
					link="/"
				/>
				<ProductCard
					title={'Microsoft Fabric UI React'}
					description={
						'Microsoft Fabric UI library to build Fluent experiences. I refactored developer examples to create an easier adoption process'
					}
					image={data.fabric.childImageSharp.fluid}
					linkTitle={'Learn More'}
					link="/"
				/>
			</div>
		</Container>
	)
}

export default FeaturedProjects
