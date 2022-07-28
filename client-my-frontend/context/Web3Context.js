import { createContext, useState, useEffect, useContext } from "react";

const Web3Context = createContext(null);

export const  Web3Provider = ({children}) => {
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <Web3Context.Provider value={{correctNetwork, setCorrectNetwork, 
      isUserLoggedIn, setIsUserLoggedIn,
      currentAccount, setCurrentAccount,
      input, setInput, tasks, setTasks,
      isVisible, setIsVisible
    }} >
      {children}
    </Web3Context.Provider >
  )
}

export const useWeb3Provider = () => {
  return useContext(Web3Context)
}