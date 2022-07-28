import React from 'react'

import { IoMdAddCircle } from 'react-icons/io'
import Task from './Task'

import { useWeb3Provider } from '../context/Web3Context'
import { addTask, deleteTask } from '../utils/methods'

const TodoList = () => {
  const { input, setInput, tasks, setTasks} = useWeb3Provider()

  const handleClick = async (e) => {
    e.preventDefault()
    addTask(input, setTasks, tasks)
    setInput('')
  }

  return (
    <div className='w-[70%] bg-gray-500 py-4 px-9 rounded-l-3xl rounded-r-xl overflow-y-scroll max-h-half' style={{maxHeight: '60vh'}}>
      <div className='py-3 text-gray-700 font-bold'>TODAY&apos;S TASKS</div>

      <form className='flex items-center justify-center'>
        <input
          className='rounded-[10px] w-full p-[10px] border-none outline-none bg-gray-200 font-semibold text-gray-500 mb-[10px] placeholder:text-gray-500'
          placeholder='Add a task for today...'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
          <IoMdAddCircle
            onClick={handleClick}
            className='text-blue-600 text-[50px] cursor-pointer ml-[20px] mb-[10px]'
          />
        </form>

        <ul>
          {tasks.map(item => (
            <Task key={item.id} taskText={item.taskText} onClick={deleteTask(item.id, setTasks)}/>
          ))}
        </ul>
    </div>
  )
}

export default TodoList