/*
responsible for handling the game state.
*/
import React from "react";
import ReactDOM from "react-dom";
import Animation from "./Animation";

export default function GameHandler(props) {
  React.useEffect(() => {
    let victory = true;
    let prev = props.dieData[0].Number;
    for (let i = 0; i < props.dieData.length; i++) {
      if (
        props.dieData[i].Number != prev ||
        (props.dieData[i].Number == prev && props.dieData[i].holding == false)
      ) {
        victory = false;
        return;
      }
      prev = props.dieData[i].Number;
    }

    props.setVictory(true);
    <Animation />;
  }, [props.dieData]);
}
