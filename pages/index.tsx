import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
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

export default Home
