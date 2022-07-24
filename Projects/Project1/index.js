//<img class="bello" src="images/image.PNG" alt="" />

const page = (
    <div>
        <img className = "reactLogo"
     src = "/images/ReactLogo.png" alt = "React Logo"/>
    <h1 className = "Title">Fun Facts about React</h1>
    <ui>
        <li className = "Release">
            Was first released in 2013
        </li>
        <li className = "Creator">
            Was originally created by Jordan Walke
        </li>
        <li className = "Ratings">
            Has well over 100K stars on Github
        </li>
        <li className = "Maintained">
            Is maintained by Facebook
        </li>
        <li className = "Popularity">
            Powers thousands of enterprise apps, including
            mobile apps
        </li>
    </ui>
    </div>
);

ReactDOM.render(page, document.getElementById("root"));