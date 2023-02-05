import { useState, useEffect } from 'react';
import apiCalls from '../api-calls';
import { useAppContext } from '../AppContext'
import { Bar } from 'react-chartjs-2';
import { Chart  } from "chart.js/auto";

const BarChart = (props) => {
  const useOptions = useAppContext()
  // console.log(useOptions.players.map(item => item.name))

  useEffect(()=>{
    useOptions.showPlayers()
  },[])

  return (
    <>
    <div className='center-here'>
    <div  className='bar-div'>
    <Bar data = {
      {
        // labels will be the player names probably
        labels:
        props.players.map(item => item.name),
        datasets: [
          {
            label:"goals scored",
            data: props.players.map(item=> item.goals),
            backgroundColor: "black",
            barPercentage: 0.7,
          },
          {
            label:"assists",
            data: props.players.map(item=> item.assist),
            backgroundColor: "#f50057",
            barPercentage: 0.7,
          },
        ]
      }
    }/>

    </div>
   
    </div>
      
    </>
  )
}

export default BarChart