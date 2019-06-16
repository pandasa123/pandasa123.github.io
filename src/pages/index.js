import React from 'react'
// import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroHeader from '../components/landing_page/HeroHeader'
import HeroNavigation from '../components/landing_page/HeroNavigation'
import Hermes from '../components/landing_page/Hermes'
import Ergonomics from '../components/landing_page/Ergonomics'

const IndexPage = () => {
    return (
        <div className="h-full w-full">
            <SEO
                title="Home"
                keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
            />
            <HeroHeader/>
            <HeroNavigation/>
            <Hermes/>
            <Ergonomics/>
        </div>
    )
}

export default IndexPage
