import { useEffect } from 'react'

import { useWeb3Provider } from '../context/Web3Context'
import { connectWallet, getAllTasks} from '../utils/methods'

import TodoList from '../components/TodoList'

export default function Home() {
  const { isUserLoggedIn, correctNetwork, setCorrectNetwork, setIsUserLoggedIn,setCurrentAccount, setTasks, isVisible } = useWeb3Provider()

  useEffect(() => {
    connectWallet(setCorrectNetwork, setIsUserLoggedIn,setCurrentAccount)
    getAllTasks(setTasks)
  }, [])
  
  return (
    <div className='w-full min-h-screen bg-gray-300 flex justify-center items-center'>
      {
        !isUserLoggedIn ? (<h1 className='text-3xl text-blue-600'>Please connect to Ethereum Rinkeby Network</h1>) :
        correctNetwork ? <TodoList /> : <WrongNetworkMessage />
      }

      {isVisible ? <h1 className='absolute inset-x-0 bottom-20 text-center font-bold text-blue-700'>After deleting a Todo you may have to wait a little to be confirmed by the chain. Try to refresh.</h1> : ''}
    </div>
  )
}
