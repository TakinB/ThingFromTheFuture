import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import objects from './data/objects.json'
import events from './data/events.json'
import contexts from './data/contexts.json'
import moods from './data/moods.json'

import carobjects from './mobility/objects.json'
import carevents from './mobility/events.json'
import carcontexts from './mobility/contexts.json'
import carmoods from './mobility/moods.json'

import Card from './components/card'



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

// function App() {

//   const cards = shuffle(allcards).slice(0,4)

//   return (
//     <div className="App">
//     {
//       cards.map(card => <Card type={card.type} title={card.title} description="test"/>)
//     }
//     </div>
//   )
// }


// use instead  math.random(length of the array) 
function App() {
  const [mode, setMode] = useState(false);

  //silly thing from the future
  const myMoods = shuffle(moods).slice(0,1)
  const myEvents = shuffle(events).slice(0,1)
  const myObjects = shuffle(objects).slice(0,1)
  const myContexts = shuffle(contexts).slice(0,1)

  //mobility thing from the future
  const myCarMoods = shuffle(carmoods).slice(0,1)
  const myCarEvents = shuffle(carevents).slice(0,1)
  const myCarObjects = shuffle(carobjects).slice(0,1)
  const myCarContexts = shuffle(carcontexts).slice(0,1)

  return (
    <div className="App">
      <button onClick={()=>setMode(!mode) }/>
      <div className="cardGroup">
        <h1>Let's get silly!</h1>
      {
        myObjects.map(myObjects => <Card type="Object" title={myObjects.title} key={myObjects.title}/>)
      }
      {
        myContexts.map(myContexts => <Card type="Context" title={myContexts.title} key={myContexts.title}/>)
      }
      {
        myEvents.map(myEvents => <Card type="Type of Future" title={myEvents.title} description={myEvents.description} key={myEvents.title}/>)
      }
      {
        myMoods.map(myMoods => <Card type="Emotion" title={myMoods.title} key={myMoods.title}/>)
      }
      </div>
      <div className="cardGroup">
      <h1>Let's think about mobility!</h1>
      {
        myCarObjects.map(myCarObjects => <Card type="Object" title={myCarObjects.title} key={myCarObjects.title}/>)
      }
      {
        myCarContexts.map(myCarContexts => <Card type="Context" title={myCarContexts.title} key={myCarContexts.title} />)
      }
      {
        myCarEvents.map(myCarEvents => <Card type="Type of Future" title={myCarEvents.title} description={myCarEvents.description } key={myCarEvents.title}/>)
      }
      {
        myCarMoods.map(myCarMoods => <Card type="Emotion" title={myCarMoods.title} key={myCarMoods.title} />)
      }
      </div>
    </div>
    
  );
}

export default App
