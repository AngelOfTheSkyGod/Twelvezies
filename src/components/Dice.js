import { useSpring, animated } from "react-spring";
import React from "react";
export default function Dice(props) {
  const styles = useSpring({
    to: async (next, cancel) => {
      await next({ transform: "rotate(180deg)" });
      await next({ transform: "rotate(360deg)" });
    },
    from: { transform: "rotate(0deg)" },
    config: { duration: 250 },
  });
  console.log("ROLLING DICE? : " + props.rollingDice);
  // if (!props.rollingDice){
  //     styles = {}
  // }
  return (
    <animated.div
      className="Die"
      type="button"
      onClick={() => props.setHold(props.ID)}
      style={
        props.Holding
          ? { backgroundColor: "green" }
          : props.rollingDice
          ? styles
          : {}
      }
    >
      <h1 className="Number">{props.Number}</h1>
    </animated.div>
  );
}
