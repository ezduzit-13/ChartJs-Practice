import React,{useState, createContext, useContext} from 'react'
import apiCalls from './api-calls'

const AppContext = createContext(null)

export function useAppContext(){
  return useContext(AppContext)
}
// AppContext provider starts here
export function AppContextProvider({children}){
  const [players,getPlayers] = useState(null)
  const [sortBy,getSortBy] = useState('goals')
  const [amount, getAmount] = useState(10)

  function showPlayers(){
    console.log(apiCalls.url + sortBy + '/' + amount, "url thingy")
    apiCalls.getRequest(apiCalls.url + sortBy + '/' + amount)
    .then(data => {
      getPlayers(data)
      console.log(data)
    })
  }

  const appOptions = {
    players:players,
    sortBy:sortBy,
    amount:amount,
    getSortBy:getSortBy,
    showPlayers:showPlayers,
    getAmount:getAmount,
    newWord:'new word',
}

  return (
    <>
    <AppContext.Provider value = {appOptions}>
      {children}
    </AppContext.Provider>
    </>
  )
}