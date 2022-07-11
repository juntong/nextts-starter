import type { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <h1 className="ml-1 p-2 text-3xl underline">About...</h1>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
