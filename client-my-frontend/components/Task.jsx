import { BsFillTrashFill } from 'react-icons/bs'

import { useWeb3Provider } from '../context/Web3Context'

const Task = ({ taskText, onClick }) => {
  
  const {setIsVisible} = useWeb3Provider()

  const handleClick = () => {
    onClick()
    setIsVisible(true)

    setTimeout(() => {
      setIsVisible(false)
    }, 20000)
  }
  
  return (
    <div className='flex items-center text-white'>
      <div className=' bg-blue-600 text-white flex w-[70%] rounded-[15px] mb-[10px] flex-1'>
        <div className='flex items-center justify-between w-full p-[20px] text-xl'>
          {taskText}
        </div>
      </div>
      <BsFillTrashFill
        className='text-2xl cursor-pointer ml-8
         mr-3'
        onClick={handleClick}
      />
    </div>
  )
}

export default Task
