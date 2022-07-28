import React from 'react'

const WrongNetworkMessage = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <h1 className='text-4xl text-accent'>
        In order to use this application you have to switch to the Rinkeby Network.
      </h1>
    </div>
  )
}

export default WrongNetworkMessage