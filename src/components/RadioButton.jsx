import React, { createContext, useEffect, useState } from "react";

import  './RadioButton.css';


export default function RadioButton({handleMode}) {
  const [mode, setMode] = useState("Mobility")

  const onOptionChange = e => {
    setMode(e.target.value)
  }

  return (
    <div className="RadioButton">
      <h3>Select mode: </h3>

      <input className="singleRadio"
        type="radio"
        name="Silly"
        value="Silly"
        id="Silly"
        checked={mode === "Silly"}
        onChange={e => {setMode(e.target.value); handleMode(e.target.value)}}
      />
      <label htmlFor="Silly">Silly</label>

      <input className="singleRadio"
        type="radio"
        name="Mobility"
        value="Mobility"
        id="Mobility"
        checked={mode === "Mobility"}
        onChange={e => {setMode(e.target.value); handleMode(e.target.value)}}
      />
      <label htmlFor="Mobility">Mobility</label>

      <input className="singleRadio"
        type="radio"
        name="Cutom"
        value="Cutom"
        id="Cutom"
        checked={mode === "Cutom"}
        onChange={e => {setMode(e.target.value); handleMode(e.target.value)}}
      />
      <label htmlFor="Cutom">Cutom</label>

      <p>
        Selected mode is :  <strong>{mode}</strong>
      </p>
    </div>
  )
}
