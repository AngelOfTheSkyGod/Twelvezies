import React from 'react';
import ReactDOM from 'react-dom';
import styling from './index.css'

export default function Header(){
    return (
        <header>
           <nav>
              <ui className="List">
                 <li className= "Pricing">
                 Pricing
                 </li>
                 <li className= "About">
                    About
                 </li>
                 <li className= "Contact">
                    Contact
                 </li>
              </ui>
           </nav>
        </header>
     )
}