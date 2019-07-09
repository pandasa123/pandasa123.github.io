import { graphql, useStaticQuery } from 'gatsby'

const getNavigationImage = (): object => {
	// noinspection Annotator
	const image = useStaticQuery(
		graphql`
            query profileImage {
                profileImage: file(relativePath: { eq: "Profile.png" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
		`,
	)

	return image.profileImage.childImageSharp.fluid
}

export default getNavigationImage
