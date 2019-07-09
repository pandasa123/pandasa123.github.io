import { graphql, useStaticQuery } from 'gatsby'

const getFeaturedProjectImages = (): object => {
	// noinspection Annotator
	const images = useStaticQuery(graphql`
        query FeaturedProjects {
            hermes: file(relativePath: { eq: "ProductPages/Hermes.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dieselLabs: file(relativePath: { eq: "ProductPages/DieselLabs.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fabric: file(relativePath: { eq: "ProductPages/Fabric.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
	`)

	return {
		hermes: images.hermes.childImageSharp.fluid,
		dieselLabs: images.dieselLabs.childImageSharp.fluid,
		fabric: images.fabric.childImageSharp.fluid,
	}
}

export default getFeaturedProjectImages
