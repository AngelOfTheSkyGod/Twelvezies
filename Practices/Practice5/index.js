

/**
 Challenge:
 -Add an 'ul' inside the Header's 'nav' and create
   the following 'li's: "Pricing", "About", & "Contact"
 */
import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';
import styling from './index.css'
function CreatePage(){
   const page = (
       <div>
        <ui>
           <li className="Title">
              I'm interested in how to make UIs
           </li>
           <li className="Title">
              I want to learn how to make a rock-paper-scissors game!
           </li>
           <li className="Title">
              I want to make cool website projects!
           </li>
        </ui>
       </div>
   )
   return page;
}

function CreateDescription(){
 const page = (
  <div>
  <img className = "ReactLogo" src="/images/luffy.PNG" alt="ReactLogo"/>
  </div>
 );
 return page;
}

function CreateFooter(){
  const page = (
     <div>
     <footer className="Footer">
        <p className="Footer">&copy; 20xx Quinones development. All rights reserved.</p>
     </footer>
     </div>
     )
     return page;
}
function CreateNav(){
  const page = <div>
     <nav className= "Navigation">
     <CreateDescription/>

     <Header/>
     </nav>

     <h1 className="Reasons">I'm so excited to be learning React because:</h1>
     <CreatePage/> 
     <CreateFooter/>
  </div>

  return page;
}

ReactDOM.render(<CreateNav/>, document.getElementById("root"));