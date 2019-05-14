import React from 'react'
import Head from 'next/head'

const ViewPortHeader = () => {
  return (
    <Head>
      <title>Sanket Panda</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, minimum-scale=1.0"
        key="viewport"
      />
    </Head>
  )
}

export default ViewPortHeader
