import React from 'react';
import ReactDOM from 'react-dom';
export default function CreateMain(){
    const page = (
        <div className="TopBar">
        <h1 className="Main"> 
        <ui className="List">
        <img src="/images/ReactLogo.png" className="SmallRLogo"/>
            <li className="ReactFacts">
            ReactFacts
            </li>
            <li className="Project">
            React Course- Project 1
            </li>
            
        </ui>
        
        </h1>
        
        </div>
    )
    return page;
}