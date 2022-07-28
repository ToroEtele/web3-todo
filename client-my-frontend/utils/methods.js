const TaskAbi = require('../../blockchain-backend/build/contracts/TaskContract.json')
const TaskContractAddress = require('../data/config').TaskContractAddress

const ethers = require('ethers');

//* Calls Metamask to connect wallet on clicking Connect Wallet button
export const connectWallet = async (setCorrectNetwork, setIsUserLoggedIn,setCurrentAccount) => {
  try {
    const { ethereum } = window
    
    if(!ethereum) {
      console.log('Metamask not detected')
      return
    }

    let chainId = await ethereum.request({method: 'eth_chainId'})
    console.log('connected to chain:', chainId);

    const rinkebyChainId = '0x4'
    if (chainId != rinkebyChainId) {
      alert('you are not connected to the rikeby testnet!')
      setCorrectNetwork(false)
      return
    } else {
      setCorrectNetwork(true)
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    console.log('Found account ', accounts[0] );
    setIsUserLoggedIn(true)
    setCurrentAccount(accounts[0])

  } catch (error) {
    console.log(error)
  }
}

//* Just gets all the tasks from the contract
export const getAllTasks = async (setTasks) => {
  try {
    const { ethereum } = window

    if(ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const TaskContract = new ethers.Contract(
        TaskContractAddress,
        TaskAbi.abi,
        signer
      )

      let allTasks = await TaskContract.getMyTasks()
      setTasks(allTasks)  
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

//* Add tasks from front-end onto the blockchain
export const addTask = async ( input, setTasks, tasks) => {
  let task ={
    taskText: input,
    isDeleted: false
  }

  try {
    const { ethereum } = window

    if(ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const TaskContract = new ethers.Contract(
        TaskContractAddress,
        TaskAbi.abi,
        signer
      )

      TaskContract.addTask(task.taskText, task.isDeleted)
      .then(res => {
        setTasks([...tasks, task])
        console.log('Added task')
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      console.log('ethereum object does not exist');
    }
  } catch (error) {
    console.log(error);
  }
}

//* Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
export const deleteTask = (key, setTasks) => async () => {
  try {
    const { ethereum } = window

    if(ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const TaskContract = new ethers.Contract(
        TaskContractAddress,
        TaskAbi.abi,
        signer
      )

      const deleteTaskTx = await TaskContract.deleteTask(key, true)
      
      console.log('successufully deleted: ', deleteTaskTx);
      let allTasks = await TaskContract.getMyTasks()
      setTasks(allTasks)
      
    } else {
      console.log('ethereum object does not exist');
    }
  } catch (error) {
    console.log(error);
  }
}

