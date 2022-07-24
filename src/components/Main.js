import react from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";

export default function Main(props) {
  const page = (
    <div className="Main-background">
      <Grid
        dieData={props.dieData}
        setDieData={props.setDieData}
        victory={props.victory}
        setVictory={props.setVictory}
        rollingDice={props.rollingDice}
        setRollingDice={props.setRollingDice}
      />
    </div>
  );

  return page;
}
