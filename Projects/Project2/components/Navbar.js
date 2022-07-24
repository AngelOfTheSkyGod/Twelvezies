import React from 'react';
import ReactDOM from 'react-dom';

function GenerateList(){
    return(
        <ui className="Nav_List">
            <li className="Release">
                Was first released in 2013
            </li>

            <li className="Creator">
                Was originally created by Jordan Walke
            </li>

            <li className="Popularity">
                Has well over 100K stars on GitHub
            </li>

            <li className="Maintained">
                Is maintained by Facebook
            </li>

            <li className="Power">
                Powers thousands of enterprise apps, including
                mobile apps
            </li>

    </ui>
    )
    
}
export default function NavBar(){
    const page=(
        <div className="Body">
            <h1 className="NavBar"> Fun facts about React</h1>
            <GenerateList/>
            <img src="/images/ReactLogo.png" className="HalfReactLogo"/>

        </div>
    );
    return page;
}