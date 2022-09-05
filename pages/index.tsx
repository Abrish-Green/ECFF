import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../Components/Layout/Header/Index'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ECFF Company</title>
        <meta name="description" content="Environment and Coffee Forest Forum (ECFF). Institution. Section overview. Activities; Involved in research projects" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,800;1,100;1,200;1,300;1,400;1,600;1,700&family=Mouse+Memoirs&family=Roboto+Condensed:wght@300&family=Rubik&family=Trirong:ital,wght@0,100;1,100;1,300&family=Work+Sans:ital,wght@1,300&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      </Head>
      <Header />
    </div>
  )
}

export default Home
