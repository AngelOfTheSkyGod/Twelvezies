import React from 'react'
import Data from './components/Data'
import style from './style.css'
import Confetti from 'react-confetti'

import GameHandler from './components/GameHandler'

import { useSpring, animated } from 'react-spring'

import Main from './components/Main'

export default function App(){

    const [dieData, setDieData] = React.useState(Data);
    const [victory, setVictory] = React.useState(false);
    const [rollingDice, setRollingDice] = React.useState(false);
    // const [rollingDice, setRollingDice] = React.useState({rollingit: false, 
    //     lastRolled: Date.getTime()
    //     });
    GameHandler({
        dieData, 
        setDieData,
        victory, 
        setVictory}
    )

    // Animation({
    //     dieData, 
    //     setDieData,
    //     victory, 
    //     setVictory}
    // )
    
   const page = (
        <main className="Outer-background">
           {victory && <Confetti
                width={1200}
                height={1200}
            />} 
            <Main
            dieData = {dieData}
            setDieData = {setDieData}
            victory = {victory}
            setVictory = {setVictory}
            rollingDice = {rollingDice}
            setRollingDice = {setRollingDice}
            />
        </main>
   )
   return page;
}