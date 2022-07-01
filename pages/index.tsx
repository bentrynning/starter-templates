import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>APPNAME</title>
        <meta name="description" content="Add description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-3xl font-bold underline">
        Main content here!
      </main>

      <footer className="">
        Footer content here!
      </footer>
    </div>
  )
}

export default Home
