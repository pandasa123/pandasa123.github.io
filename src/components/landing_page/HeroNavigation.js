import React, {useState} from 'react'
import classnames from 'classnames'

const HeroNavigation = () => {
    const [projectType, setProjectType] = useState('Professional')

    const professionalClasses = classnames({
        'uppercase': true,
        'font-semibold': projectType === 'Professional',
        'text-gray-400': projectType !== 'Professional',
        'hover:text-gray-600': projectType !== 'Professional',
    })

    const academicClasses = classnames({
        'pl-4': true,
        'md:pr-4': true,
        'uppercase': true,
        'font-semibold': projectType === 'Academic',
        'text-gray-400': projectType !== 'Academic',
        'hover:text-gray-600': projectType !== 'Academic',
    })


    return (
        <section
            className="w-full bg-white text-xs h-10 pt-2 flex flex-row justify-center md:justify-between">
            <span className="hidden md:inline-block lg:pl-4">
                <a className="uppercase font-semibold pl-8" href="#">Hermes</a>
                <a className="uppercase text-gray-400 pl-8" href="#">Ergonomics</a>
                <a className="uppercase text-gray-400 pl-8" href="#">T-SNE</a>
                <a className="uppercase text-gray-400 pl-8" href="#">Excel Export</a>
            </span>
            <span className="md:mr-6">
                <a className={professionalClasses} href="#"
                   onClick={() => setProjectType('Professional')}>Professional</a>
                <a className={academicClasses} href="#" onClick={() => {
                    setProjectType('Academic')
                }}>Academic</a>
            </span>
        </section>
    )
}

export default HeroNavigation
