import Dice from "./Dice";
import Display from "./Display";
import Roll from "./Roll";
import React from "react";

import Animation from "./Animation";

export default function Grid(props) {
  const Die = props.dieData.map((currentDice) => {
    return (
      <Dice
        Number={currentDice.Number}
        ID={currentDice.id}
        Holding={currentDice.holding}
        setHold={setHold}
        victory={props.victory}
        setVictory={props.setVictory}
        Animation={Animation}
        dieData={props.dieData}
        setDieData={props.setDieData}
        rollingDice={props.rollingDice}
      />
    );
  });

  function setHold(id) {
    if (props.rollingDice) {
      return;
    }
    let newDie = props.dieData.map((dice) => {
      if (dice.id == id) {
        dice.holding = !dice.holding;
      }
      return dice;
    });
    props.setDieData((prevDie) => {
      return newDie;
    });
  }

  return (
    <div className="Grid-background">
      <Display />
      <div className="Grid">{Die}</div>
      <Roll
        dieData={props.dieData}
        setDieData={props.setDieData}
        victory={props.victory}
        setVictory={props.setVictory}
        rollingDice={props.rollingDice}
        setRollingDice={props.setRollingDice}
      />
    </div>
  );
}
