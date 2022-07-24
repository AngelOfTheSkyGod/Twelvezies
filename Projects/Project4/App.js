import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/Card'
import Data from './components/Data'
import Header from './components/Header'
import style from './style.css'
export default function App(){
    const cards = Data.map(component=>{
        return <Card
        {...component}
        /> ;
     })
    const page = (
        <div className="Page">
            <Header/>
            {cards}
        </div>
    );

    return page;

}

