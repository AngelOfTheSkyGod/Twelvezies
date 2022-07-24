
function LinkedIn(){
    return (<a className="linkedInLink" href="https://www.linkedin.com/in/angel-quinones-a70958207/">
    <img className="LinkedInPicture" src="/images/LinkedIn.PNG"/>
</a>);
}

function Email(){
    return (<a className="EmailLink" href="mailto:quinonesangel2000@gmail.com?subject = Feedback&body = Message">
    <img className="EmailPicture" src="/images/Email.PNG"/>
</a>);
}

export default function Info(){
    const page = (
        <div>
<h1 className="Name">Angel Quinones</h1>
        <h2 className="Role">Aspiring Full Stack Developer</h2>
        <h3 className="Quote">People's dreams never end</h3>
        <LinkedIn/>
        <Email/>
        </div>
    );
    return page;
}