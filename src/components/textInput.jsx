import React, { createContext, useEffect, useState } from "react";
import './textInput.css'

const TextInput = ({handleCallback}) => {
    const [objectString, setObjectString] = useState(["object1", "object2"]);
    const [contextString, setContextString] = useState(["context1", "context2"]);
    const [emotionString, setEmotionString] = useState(["emotion1", "emotion2"]);
    
    return (
      <>
        <label style={{align:"center"}} >
          <p> Object:</p>
          <input className="singleInput"
            value={objectString}
            onChange={e => setObjectString(e.target.value.split(','))}
            type="string"
          />
          <p>Context:</p>

          <input className="singleInput"
              value={contextString}
              onChange={e => setContextString(e.target.value.split(','))}
              type="string"
          />
          <p>Emotion:</p>
          <input className="singleInput"
              value={emotionString}
              onChange={e => setEmotionString(e.target.value.split(','))}
              type="string"
          />
          <p></p>
          <button onClick={e =>{e.preventDefault(); handleCallback([objectString, contextString, emotionString])}}>
            submit
          </button>

        </label>
        <p>Enter a list of words, comma separated.</p>
        
      </>
    );
}

export default TextInput;