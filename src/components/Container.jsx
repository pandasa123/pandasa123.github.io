import React from 'react'

const Container = (props) => {
    return (
        <section className={'px-6 md:px-8 ' + props.classes}>{props.children}</section>
    )
}

export default Container