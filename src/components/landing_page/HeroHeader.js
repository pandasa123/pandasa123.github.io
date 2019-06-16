import React, {useState} from 'react'
import classnames from 'classnames'

const HeroHeader = () => {
    const [selected, setSelected] = useState(0)
    const projectClasses = classnames({
        'font-semibold': selected === 0,
        'text-gray-400': selected !== 0,
    })

    const resumeClasses = classnames({
        'font-semibold': selected === 1,
        'text-gray-400': selected !== 1,
    })

    const aboutClasses = classnames({
        'font-semibold': selected === 2,
        'text-gray-400': selected !== 2,
    })


    return (
        <section className="pl-5 pt-4 h-48 lg:h-56 xl:h-64 md:pl-8 lg:pl-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl">
                Hello! I'm Sanket!
            </h1>
            <h2
                id="hero_name"
                className="pt-5 text-2xl md:pt-7 lg:text-3xl xl:text-4xl"
            >
                I'm a Frontend Developer
            </h2>
            <h3 className="pt-6 text-md lg:text-lg xl:text-xl">
                <a className={projectClasses} onClick={() => setSelected(0)} href="#">Projects</a>
                <span className="text-gray-400"> / </span>
                <a className={resumeClasses} onClick={() => setSelected(1)} href="#">Resume</a>
                <span className="text-gray-400"> / </span>
                <a className={aboutClasses} onClick={() => setSelected(2)} href="#">About</a>
            </h3>
        </section>
    )
}

export default HeroHeader
