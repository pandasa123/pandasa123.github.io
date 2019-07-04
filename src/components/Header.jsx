import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Container from './Container'

const Header = ({ selected }) => {
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
        <Container classes={'py-4 w-full h-16 flex flex-row fixed shadow-md bg-white'}>
            <AniLink fade to='/'>
                <Img
                    className={'w-8 block'}
                    title="Contact Page"
                    alt="Contact Page"
                    fluid={data.profileImage.childImageSharp.fluid}
                />
            </AniLink>
            <span className={'font-bold text-l pl-4 mt-1'}>
                <AniLink
                    fade
                    to="/"
                    className={
                        selected === 'Overview'
                            ? 'text-blue-500 inline-block pr-4'
                            : 'text-gray-300 inline-block pr-4'
                    }
                >
                    Overview
                </AniLink>
                <AniLink
                    fade
                    to="/projects"
                    className={
                        selected === 'Projects'
                            ? 'text-blue-500 inline-block pr-4'
                            : 'text-gray-300 inline-block pr-4'
                    }
                >
                    Projects
                </AniLink>
                <AniLink
                    fade
                    to="/"
                    className={
                        selected === 'Resume'
                            ? 'text-blue-500 inline-block'
                            : 'text-gray-300 inline-block'
                    }
                >
                    Resume
                </AniLink>
            </span>
        </Container>
    )
}

export default Header
