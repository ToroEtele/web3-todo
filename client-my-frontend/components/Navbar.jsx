import React from 'react'

import Link from 'next/link'

import { connectWallet } from '../utils/methods'
import { useWeb3Provider } from '../context/Web3Context'

const Navbar = () => {
  const { isUserLoggedIn, setCorrectNetwork, setIsUserLoggedIn,setCurrentAccount } = useWeb3Provider();

  return (
    <nav className='flex flex-row items-center justify-between p-6 bg-gray-700 font-bold absolute w-screen'>
      <div className='flex items-center'>
        <h1 className='text-4xl text-white sm:hidden md:block'><Link href='/' passHref>Decentralised Todo</Link></h1>
        <Link href="/about" passHref>
          <h2 className='text-2xl pl-20 text-white cursor-pointer hover:text-blue-500'>About this application</h2>
        </Link>
      </div>

      <button 
        className="bg-gradient-to-r from-green-400 to-blue-500 px-10 py-2 rounded-2xl text-xl text-white"
        onClick={ () => connectWallet(setCorrectNetwork, setIsUserLoggedIn,setCurrentAccount) }
      >
        Login
      </button>
    </nav>
  )
}

export default Navbar