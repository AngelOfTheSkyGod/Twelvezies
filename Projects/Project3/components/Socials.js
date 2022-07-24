function FacebookLink(){
    return (
    <div>
        <a href="https://www.facebook.com/angel.quinones.946">
            <img className="Facebook" src="/images/Facebook.PNG"/>
        </a>
    </div>
    )
}

function InstagramLink(){
    return (
    <div>
        <a href="https://www.instagram.com/angel.quinones.946/?hl=en">
            <img className="Instagram" src="/images/Instagram.PNG"/>
        </a>
    </div>
    )
}


export default function Socials(){
    const page = (
        <footer className="Footer">
            <FacebookLink/>
            <InstagramLink/>
        </footer>
    );
    return page;
}