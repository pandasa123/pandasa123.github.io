import { graphql, useStaticQuery } from 'gatsby'

const getAllProjects = () => {
	// noinspection Annotator
	const images = useStaticQuery(graphql`
        query AllProjects {
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
            helloPAM: file(relativePath: { eq: "ProductPages/HelloPAM.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            msas: file(relativePath: { eq: "ProductPages/MSAS.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            museumDemo: file(relativePath: { eq: "ProductPages/MuseumDemo.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            reactSVG: file(relativePath: { eq: "ProductPages/ReactSVG.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            umViz: file(relativePath: { eq: "ProductPages/UMViz.png" }) {
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
		helloPAM: images.helloPAM.childImageSharp.fluid,
		msas: images.msas.childImageSharp.fluid,
		museumDemo: images.museumDemo.childImageSharp.fluid,
		reactSVG: images.reactSVG.childImageSharp.fluid,
		umViz: images.umViz.childImageSharp.fluid,
	}
}

export default getAllProjects
