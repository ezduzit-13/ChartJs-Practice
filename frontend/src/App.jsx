import { useState, useEffect } from 'react';
import apiCalls from './api-calls';
import { useAppContext } from './AppContext'
import BarChart from './components/BarChart';
import PlayerTable from './components/PlayerTable';
import Button from '@mui/material/Button'
import './main.css'
import FootballPlayerAmount from './components/Amount';
import Amount from './components/Amount';
import SortBy from './components/SortBy';
/**
 * ! add a top goal scorers table
*/
function App() {
  const useOptions = useAppContext()
  useEffect(()=>{
    useOptions.showPlayers()
  },[useOptions.amount,useOptions.sortBy])
  return (
  <>
    <div className='center-here'>
      <h1>Premier League Stats</h1>
    </div>
    <br /><br />
    <div className='center-here'>
      <div className='choices'>
      <Amount />
      <SortBy />
      </div>
    </div>
    <br /><br />    
    {
      useOptions.players &&
      <BarChart players = {useOptions.players}/>
    }
    <PlayerTable/>
    </>
  );
}

export default App;
