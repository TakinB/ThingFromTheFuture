import React, { createContext, useEffect, useState } from "react";
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
import TextInput from './components/textInput'
import RadioButton from './components/RadioButton'
import { getStyleValue } from "@mui/system";



// let mode = false

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
  const [object, setObject] = useState([ "Beverage"]);
  const [event, setEvent] = useState([{        "title": "Collapse", "description": "example"}]);
  const [mood, setMood] = useState(["Amusement"]);
  const [context, setContext] = useState(["Zombies"]);
  const [intro, setIntro] = useState("example");
  const [data, setData] = useState(["test1", "test2"]);

  const handleData = (data) => {
    setData(data)
  }

  function handleToggle(mode) {
    
    console.log(mode)
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
    
    if(mode == "Silly"){
      setEvent(mySillyEvents)
      setObject(mySillyObjects)
      setContext(mySillyContexts)
      setMood(mySillyMoods)
    }
    if(mode == "Mobility"){
      setIntro("Imagine mobililty")
      setEvent(myCarEvents)
      setObject(myCarObjects)
      setContext(myCarContexts)
      setMood(myCarMoods)
    }
    if(mode == "Custom"){

      setObject(myCustomeObjects)
      setContext(myCustomeContexts)
      setMood(myCustomeMoods)
      // setEvent(childData)
  
      console.log(childData)
      console.log(myCustomeObjects)
    }
  }

  function CallBack (childData){

    //customise thing from the future
    const myCustomeObjects = shuffle(childData[0]).slice(0,1)
    const myCustomeContexts = shuffle(childData[1]).slice(0,1)
    const myCustomeMoods = shuffle(childData[2]).slice(0,1)
    // const myCustomeEvents = shuffle(carevents).slice(0,1)



    setObject(myCustomeObjects)
    setContext(myCustomeContexts)
    setMood(myCustomeMoods)
    // setEvent(childData)

    console.log(childData)
    console.log(myCustomeObjects)
  }

  return (
    <div className="App">
      <button onClick={event =>handleToggle()}> redraw </button>
      {/* <Switch 
        isOn={mode}
        handleToggle={() => {mode = !mode; handleToggle();}}
      /> */}
      <Deck gameIntro={intro} Moods={mood} Objects={object} Contexts={context} Events={event}/> 
      <TextInput handleCallback={CallBack}/>
      <RadioButton handleMode={handleToggle}/>
    </div> 
  );
}

export default App

