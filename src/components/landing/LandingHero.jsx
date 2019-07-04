import React from 'react'
import Container from '../Container'

const LandingHero = () => {
    return (
        <Container classes="pt-24 text-3xl font-bold text-gray-500 leading-snug sm:text-4xl md:pt-32 md:text-5xl">
            <h1>
                Hi! I'm <strong className={'text-blue-500'}>Sanket Panda</strong>,
            </h1>
            <br />
            <h2>
                <strong className={'text-blue-500'}>Technical Product Manager</strong>
            </h2>
            <br />
            <h2>
                I'm studying CS at the{' '}
                <strong className={'text-blue-500'}>University of Michigan</strong>
            </h2>
            <br />
            <h2>
                And working for <strong className={'text-blue-500'}>IBM Extreme Blue</strong>
            </h2>
        </Container>
    )
}

export default LandingHero
