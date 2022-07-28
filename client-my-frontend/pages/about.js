import React from 'react'

import Link from 'next/link'

const About = () => {
  return (
    <>
    <button className='absolute mt-36 ml-20 px-10 py-3 rounded-3xl bg-blue-500 text-white font-bold'><Link href='/' passHref>Back</Link></button>
    <div className='w-full h-screen flex flex-col items-center justify-center text-blue-500'>
      <h1 className='text-5xl font-bold'>About this projet:</h1>
      <ul className='pt-20 text-2xl font-bold text-gray-600 list-disc'>
        <li>This project was created by <span className='text-blue-500'>Toró Etele</span></li>
        <li>It's a simple <span className='text-blue-500'>web3 application</span> wich connects to the Ethereum Rinkeby Testnet.</li>
        <li>The added Todo's will be stored on the <span className='text-blue-500'>blockchain</span>, the listed Todos are address specific.</li>
        <li>In order to use this application you have to connect to the <span className='text-blue-500'>Rinkeby Network</span>, and get some coins from a faucet.</li>
        <li>The frontend of the app is created with  <span className='text-blue-500'>Next JS</span></li>
        <li>This project was inspired by <span className='text-blue-500'>Clever Programmer's</span> tutorial. Thanks!</li>
      </ul>
    </div>
    </>
  )
}

export default About