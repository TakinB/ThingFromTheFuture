import React, { createContext, useEffect, useState } from "react";
import "./textInput.css";

const TextInput = ({ handleCallback }) => {
  const defaultValues = [["object1", "object2"],["context1", "context2"],["emotion1", "emotion2"],[
    {
      title: "Collapse",
      description: "a future in which society as we know it has come apart",
    },     {
      title: "Grow",
      description: "a future in which “progress” has continued",
    },     {
      title: "Dicipline",
      description: "a future in which order is deliberately coordinated or imposed",
    },     {
      title: "Transform",
      description: "a future in which a profound historical evolution has occurred",
    }
  ]]
  
  const [objectString, setObjectString] = useState(defaultValues[0]);
  const [contextString, setContextString] = useState(defaultValues[1]);
  const [emotionString, setEmotionString] = useState(defaultValues[2]);
  const [eventString, setEventString] = useState(defaultValues[3]);


  return (
    <div className="TextInput">
      <p>Enter a list of words, comma separated.</p>
      <label style={{ align: "center", display: "inline" }}>
        <div className="InputLabel">
          <p> Object:</p>
          <input
            className="singleInput"
            placeholder={objectString}
            onChange={(e) => setObjectString(e.target.value.trim().length!=0 ? e.target.value.split(",") : defaultValues[0])}
            type="string"
          />
        </div>

        <div className="InputLabel">
          <p>Context:</p>

          <input
            className="singleInput"
            placeholder={contextString}
            onChange={(e) => setContextString(e.target.value.trim().length!=0 ? e.target.value.split(",") : defaultValues[1])}
            type="string"
          />
        </div>

        <div className="InputLabel">
          <p>Type of future:</p>
          <input
            placeholder={JSON.stringify(eventString)}
            className="singleInput"
            // value={JSON.stringify(eventString)}
            onChange={(e) => setEventString(e.target.value.trim().length!=0 ? e.target.value.split(",") : defaultValues[3])}
            type="string"
          />
        </div>

        <div className="InputLabel">
          <p>Emotion:</p>
          <input
            className="singleInput"
            placeholder={emotionString}
            onChange={(e) => setEmotionString(e.target.value.trim().length!=0 ? e.target.value.split(",") : defaultValues[2])}
            type="string"
          />
        </div>
        <button className="InputLabel"
          onClick={(e) => {
            e.preventDefault();
            handleCallback([
              objectString,
              contextString,
              eventString,
              emotionString
            ]);
          }}
        >
          submit
        </button>
      </label>
      <p></p>
    </div>
  );
};

export default TextInput;
