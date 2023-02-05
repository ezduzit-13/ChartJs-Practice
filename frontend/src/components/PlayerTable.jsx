import { useState, useEffect } from 'react';
import apiCalls from '../api-calls';
import { useAppContext } from '../AppContext'


const PlayerTable = () => {
  
  const useOptions = useAppContext()

  return (
    <>
    <h1>Top goal Scorers</h1>

    <table>
      <tr>
        <td>Player Name</td>
        <td>Goals</td>
        <td>Assist</td>
        <td>Appearances</td>
      </tr>
      {
        useOptions.players &&
        useOptions.players.slice(0,5).map(
          (item)=>{
            return(
              <>
              <tr>
                <td>{item.name}</td>
                <td>{item.goals}</td>
                <td>{item.assist}</td>
                <td>{item.app}</td>
              </tr>
              </>
            )
          }
        )
      }


    </table>
      
    </>
  )
}

export default PlayerTable