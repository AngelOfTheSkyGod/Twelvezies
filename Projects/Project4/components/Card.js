function topBar(Props){
    const page = (
        <span className="TopBar2">
        <img className="DestinationImg" src="./images/Location.PNG"/>
            <h1 className="CountryName">{Props.Country}</h1>
            <a className="DestinationLink" 
            href={Props.LocationURL}
            target="_blank"
            > View on Google Maps</a>
        </span>
    )
    return page;
}

export default function Card(Props){
    const page = (
        <div className= "Background">
            <img className= "CardImage" src = {Props.Img} alt="mtfuji"/>
            <div className= "Description">
            {topBar(Props)}
                <h1 className="LocationName">
                    {Props.LocationName}
                </h1>
                <h2 className="Date">
                    {Props.StartDate + " - " + Props.EndDate}
                </h2>
                <h3 className="LocationDescription">
                    {Props.Description}
                </h3>
            </div>
        </div>
    )
    return page;
}