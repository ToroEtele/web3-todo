import '../styles/globals.css'

import Navbar from '../components/Navbar'
import Head from 'next/head'

import {Web3Provider} from '../context/Web3Context'

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider >
      <Head>
        <title>Decentralised Todo</title>
        <meta name='description' content='A decentralised web3 todo connecting to the ethereum rinkeby network.'/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Web3Provider >
  )
}

export default MyApp
