import React, { createContext, useEffect, useState } from "react";

import  './RadioButton.css';


export default function RadioButton({handleMode}) {
  const [mode, setMode] = useState("Silly")

  const onOptionChange = e => {
    setMode(e.target.value)
  }

  return (
    <div className="RadioButton">
      <h3>Select mode: </h3>

      <div className="RadioLabel">
        <input className="singleRadio"
                type="radio"
                name="Silly"
                value="Silly"
                id="Silly"
                checked={mode === "Silly"}
                onChange={e => {setMode(e.target.value); handleMode(e.target.value)}}
              />
              <label htmlFor="Silly">Silly</label>
      </div>

      <div className="RadioLabel">
        <input className="singleRadio"
                type="radio"
                name="Mobility"
                value="Mobility"
                id="Mobility"
                checked={mode === "Mobility"}
                onChange={e => {setMode(e.target.value); handleMode(e.target.value)}}
              />
              <label htmlFor="Mobility">Mobility</label>
      </div>

      <div className="RadioLabel">
        <input className="singleRadio"
                type="radio"
                name="Charging"
                value="Charging"
                id="Charging"
                checked={mode === "Charging"}
                onChange={e => {setMode(e.target.value); handleMode(e.target.value)}}
              />
              <label htmlFor="Charging">Charging</label>
      </div>

    </div>
  )
}
