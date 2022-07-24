
export default function App(){

    function HandleClick(){
        prompt("Mouse Has Clicked!");
    }
    function HandleHover(){
        prompt("Mouse has Hovered!");
    }
    const page = (
        <div className="Container">
            <img className="Picture" 
            onMouseEnter={HandleHover}
            src="./images/luffy.png"/>
            
            <button onClick= {HandleClick}
            >Click me!</button>
        </div>
    );
    return page;
}