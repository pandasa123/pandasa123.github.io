import React from 'react'
import HermesIcon from '../../images/Hermes/HermesIcon.png'
import HermesDemo from '../../images/Hermes/HermesDemo.png'

const Hermes = () => {
    return (
        <section className="bg-gray-100 pt-12 h-hero flex flex-col md:flex-row md:pt-8">
            <div className="text-center md:text-left md:pl-8 lg:pl-12">
                <div className="pt-8">
                    <img src={HermesIcon} className="block mx-auto md:mx-0 h-16 w-16"/>
                </div>
                <div>
                    <h1 className="pt-5 text-gray-600 md:text-xl">Project Hermes</h1>
                    <h2 className="pt-3 pb-3 text-xl md:text-2xl">Extending SalesForce Live Agent Chat</h2>
                    <span className="text-gray-600 md:text-xl">Built at IBM Extreme Blue, this product increases Live Agent Productivity by auto logging in / out of the SalesForce Console</span>
                    <h3 className="pt-5 underline md:text-xl">Read more about it!</h3>
                </div>
            </div>
            <div className="pt-12 block mx-auto md:flex md:mx-0 md:pt-0 md:mb-8">
                <img src={HermesDemo}
                     className="w-full md:pt-12 md:pl-2 md:mt-24 md:h-400px lg:pt-0 lg:mt-0 lg:block lg:h-500px xl:h-auto"/>
            </div>
        </section>
    )
}

export default Hermes
