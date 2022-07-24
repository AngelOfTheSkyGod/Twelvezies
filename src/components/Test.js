import React from "react";
import ReactDOM from "react-dom";
function CreateTest() {
  const [singlePlayer, setSinglePlayer] = React.useState(false);
  /// event running a function for the click

  setSinglePlayer(true);

  React.useEffect(() => {}, [singlePlayer]);

  ///// inside matrix function return///

  return singlePlayer && GenerateGrid();
}
