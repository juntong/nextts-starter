import type { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Nextts and Tailwindcss</title>
      </Head>
      <div>
        <h1 className="ml-1 p-2 text-3xl underline">Nextts and Tailwindcss</h1>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
