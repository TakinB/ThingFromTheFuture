import React, { createContext, useEffect, useState } from "react";
import "./textInput.css";

const TextInput = ({ handleCallback }) => {
  const [objectString, setObjectString] = useState(["object1", "object2"]);
  const [contextString, setContextString] = useState(["context1", "context2"]);
  const [emotionString, setEmotionString] = useState(["emotion1", "emotion2"]);
  const [eventString, setEventString] = useState([
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
  ]);


  return (
    <div className="TextInput">
      <p>Enter a list of words, comma separated.</p>
      <label style={{ align: "center", display: "inline" }}>
        <div className="InputLabel">
          <p> Object:</p>
          <input
            className="singleInput"
            value={objectString}
            onChange={(e) => setObjectString(e.target.value.split(","))}
            type="string"
          />
        </div>

        <div className="InputLabel">
          <p>Context:</p>

          <input
            className="singleInput"
            value={contextString}
            onChange={(e) => setContextString(e.target.value.split(","))}
            type="string"
          />
        </div>

        <div className="InputLabel">
          <p>Type of future:</p>
          <input
            className="singleInput"
            value={eventString}
            onChange={(e) => setEventString(e.target.value.split(","))}
            type="string"
          />
        </div>

        <div className="InputLabel">
          <p>Emotion:</p>
          <input
            className="singleInput"
            value={emotionString}
            onChange={(e) => setEmotionString(e.target.value.split(","))}
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
