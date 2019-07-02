import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'

const IndexPage = () => {
    return (
        <div>
            <SEO
                title="Home"
                keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
            />
            <Header/>
            <div className='bg-red-300 h-screen'></div>
            <div className='bg-blue-300 h-screen'></div>
        </div>
    )
}

export default IndexPage
