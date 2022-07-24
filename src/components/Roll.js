import RandomDice from './RandomDice'

export default function Roll(props){
    
    // new Date();
    // if (Date.getTime() - props.rollingDice.lastRolled < 1){
    //     return;
    // }

    function handleClick(){
        if (props.rollingDice){
            return 
        }
        const Die = props.dieData.map(dice=>{
            if (!dice.holding || props.victory){
                window.setTimeout(()=>{dice.Number = RandomDice(6)}, 250);
            }
            dice.holding = props.victory? false : dice.holding
            return dice
        })

        props.setDieData(oldDie=>{
            return Die
        });
        if (props.victory){
            props.setVictory(false);
        }
        props.setRollingDice(true);
        window.setTimeout(()=>{props.setRollingDice(false);}, 1000);
    }

    return(<button type="button" onClick = {handleClick} className="Roll-button">
    <h1 className="Roll">
        {props.victory? "Retry" : "Roll"}
    </h1>
</button>)


}