import React from "react";
import Card from './card'

export default function Deck(props) {
    return(
        <div style={{align:"center"}}>
            <h1>{props.gameIntro}</h1>
            <Card type="Object" title={props.Objects[0]} key="object"/>
            <Card type="Context" title={props.Contexts[0]} key="context"/>
            {
                props.Futures[0].title &&
                <Card type="Type of Future" title={props.Futures[0].title} description={props.Futures[0].description } key="future"/>
            }
            
            {
                !props.Futures[0].title && !props.Futures[0].description &&
                <Card type="Type of Future" title={props.Futures[0]} description="" key="future"/>
            }
            
            <Card type="Emotion" title={props.Moods[0]} key="emotion"/>
        </div> 
        
    );

}
