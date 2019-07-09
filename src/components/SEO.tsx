import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const SEO = ({ keywords, title }) => {
	return (
		<StaticQuery
			query={detailsQuery}
			render={data => {
				const metaDescription = data.site.siteMetadata.description
				return (
					<Helmet
						htmlAttributes={{
							lang: 'en',
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: 'description',
								content: metaDescription,
							},
							{
								property: 'og:title',
								content: title,
							},
							{
								property: 'og:description',
								content: metaDescription,
							},
							{
								property: 'og:type',
								content: 'website',
							},
						]
							.concat(
								keywords.length > 0
									? {
										name: 'keywords',
										content: keywords.join(', '),
									}
									: [],
							)
							.concat([])}
					/>
				)
			}}
		/>
	)
}

export default SEO

// noinspection Annotator
const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
