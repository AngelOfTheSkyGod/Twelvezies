/**
 Challenge:
 Part 1: Create a page of your own using a custom Page component

 It should return an ordered list w/ the reasons why you're
 excited to be learning React

 Render your list to the page

 Part2: 
 -Add a 'header' element with a nested 'nav' element. Inside the 'nav', 
   include a 'img' element with the image of the React logo inside
   and make sure to set the width to something more manageable so it doesn't 
   take up the whole screen.
   -Add an 'h1' with some text describing the page. (E.g. "Reasons I'm 
   Excited to learn React"), Place it above the ordered list. 
   -Add a 'footer' after the list that says:
   "copyright 20xx<last name here> development. All rights reserved."
 */

 function CreatePage(){
    const page = (
        <div>
         <ui>
            <li>
               I'm interested in how to make UIs
            </li>
            <li>
               I want to learn how to make a rock-paper-scissors game!
            </li>
            <li>
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
   <h1 className="Reasons">I'm so excited to be learning React because:</h1>
   <img className = "reactLogo" src="/images/ReactLogo.png" alt="ReactLogo"/>
   </div>
  );
  return page;
}

function CreateFooter(){
   const page = (
      <div>
      <footer>
         <p>&copy; 20xx Quinones development. All rights reserved.</p>
      </footer>
      </div>
      )
      return page;
}
 function CreateNav(){
   const page = <div>
      <nav>
      <CreateDescription/>
      <CreatePage/>
      </nav>
      <CreateFooter/>
   </div>

   return page;
 }

 ReactDOM.render(<CreateNav/>, document.getElementById("root"));