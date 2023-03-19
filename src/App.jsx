import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import FileUpload from './components/FileUpload';
import objects from './data/objects.json'
import events from './data/events.json'
import contexts from './data/contexts.json'
import moods from './data/moods.json'

import carobjects from './mobility/objects.json'
import carevents from './mobility/events.json'
import carcontexts from './mobility/contexts.json'
import carmoods from './mobility/moods.json'

import Deck from './components/cardDeck'
import Switch  from './components/Switch'
import { getStyleValue } from "@mui/system";

let mode = false

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// use instead  math.random(length of the array) 
function App() {
  const [exmode, setExMode] = useState(false);
  const [object, setObject] = useState([{        "title": "Beverage", "description": "example"}]);
  const [event, setEvent] = useState([{        "title": "Collapse", "description": "example"}]);
  const [mood, setMood] = useState([{        "title": "Amusement", "description": "example"}]);
  const [context, setContext] = useState([{        "title": "Zombies", "description": "example"}]);
  const [intro, setIntro] = useState("example");


  const handleToggle = () => {
    
    //silly thing from the future
    const mySillyMoods = shuffle(moods).slice(0,1)
    const mySillyEvents = shuffle(events).slice(0,1)
    const mySillyObjects = shuffle(objects).slice(0,1)
    const mySillyContexts = shuffle(contexts).slice(0,1)

    //mobility thing from the future
    const myCarMoods = shuffle(carmoods).slice(0,1)
    const myCarEvents = shuffle(carevents).slice(0,1)
    const myCarObjects = shuffle(carobjects).slice(0,1)
    const myCarContexts = shuffle(carcontexts).slice(0,1)
    
    if(!mode){
      setEvent(mySillyEvents)
      setObject(mySillyObjects)
      setContext(mySillyContexts)
      setMood(mySillyMoods)
    }
    if(mode){
      setIntro("Imagine mobililty")
      setEvent(myCarEvents)
      setObject(myCarObjects)
      setContext(myCarContexts)
      setMood(myCarMoods)
    }
  }

  return (
    <div className="App">
      <button onClick={event =>handleToggle()}> redraw </button>
      <Switch 
        isOn={mode}
        handleToggle={() => {mode = !mode; handleToggle();}}
      />
      <Deck gameIntro={intro} Moods={mood} Objects={object} Contexts={context} Events={event}/> 
      {/* <FileUpload></FileUpload> */}
    </div> 
  );
}

export default App

