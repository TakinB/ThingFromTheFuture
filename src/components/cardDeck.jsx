import React from "react";
import Card from './card'

export default function Deck(props) {
    return(
        <div style={{align:"center"}}>
            <h1>{props.gameIntro}</h1>
            <Card type="Object" title={props.Objects[0]} key="object"/>
            <Card type="Context" title={props.Contexts[0]} key="context"/>
            <Card type="Type of Future" title={props.Events[0].title} description={props.Events[0].description } key={props.Events[0].title}/>
            <Card type="Emotion" title={props.Moods[0]} key="emotion"/>
        </div> 
        
    );

}
