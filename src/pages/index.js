import React from 'react'
// import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroHeader from '../components/HeroHeader'
import HeroNavigation from '../components/HeroNavigation'
// import TypeIt from 'typeit'

const IndexPage = () => {
    // useEffect(() => {
    //   new TypeIt('#hero_name', {
    //     speed: 50
    //   })
    //   .write('wefwef')
    // }, [])

    return (
        // <section className="bg-gray-500 h-64">
        <div className="h-full w-full">
            <SEO
                title="Home"
                keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
            />
            <HeroHeader/>
            <HeroNavigation/>
        </div>

        // <Layout>
        // 	<SEO
        // 		title="Home"
        // 		keywords={['gatsby', 'tailwind', 'react', 'tailwindcss']}
        // 	/>

        // 	<div className="text-center">
        // 		<h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
        // 			Hey there! Welcome to your first Gatsby site.
        // 		</h2>

        // 		<p className="leading-loose">
        // 			This is a barebones starter for Gatsby styled using{' '}
        // 			<a
        // 				href="https://tailwindcss.com/"
        // 				className="font-bold no-underline text-gray-900"
        // 			>
        // 				Tailwind
        // 			</a>
        // 			, a utility-first CSS framework.
        // 		</p>
        // 	</div>
        // </Layout>
    )
}

export default IndexPage
