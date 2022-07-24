import Joke from './Joke'
import React from 'react';
import ReactDOM from 'react-dom';

export default function App(){
    return(<div className='Background'>
        <Joke
            imgJ="/images/AstaSetup.PNG"
            ImgP="/images/CatPunchline.jpg"
        />
         <Joke
            imgJ="/images/CoronaSetup.JPG"
            ImgP="/images/NanamiPunchLine.jpg"
        />
         <Joke
            imgJ="/images/AstaSetup.PNG"
            ImgP="/images/NanamiPunchLine.JPG"
        />
         <Joke
            imgJ="/images/CoronaSetup.JPG"
            ImgP="/images/CatPunchline.JPG"
        />
    </div>);
}