import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

const Home: NextPage = () => {

  const session = useSession();
  console.log('home:', session)
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        session.status === 'authenticated'
          ? (
            <>
              <Header />
              <Feed />
              <Modal />
            </>
          ) : (
            <Header />
          )
      }
    </div>
  )
}

export default Home
