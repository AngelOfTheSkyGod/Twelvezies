
export default function Joke(props){
    const page = (
        <div className="Background">
            <img className="Joke" src={props.imgJ}/>
            <img className="Punchline" src={props.imgP}/> 
        </div>
    );

    return page;
}