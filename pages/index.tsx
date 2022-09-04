import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ECFF Company</title>
        <meta name="description" content="Environment and Coffee Forest Forum (ECFF). Institution. Section overview. Activities; Involved in research projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl font-bold underline">
            Hello world!
          </h1>
      
    </div>
  )
}

export default Home
