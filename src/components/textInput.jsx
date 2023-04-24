import React, { createContext, useEffect, useState } from "react";
import './textInput.css'

// const TextInput = ({chooseData}) => {
//     const [objectString, setObjectString] = useState(["object1", "object2"]);
//     const [contextString, setContextString] = useState(["context1", "context2"]);
//     const [emotionString, setEmotionString] = useState(["emotion1", "emotion2"]);

//     return (
//       <>
//         <label style={{align:"center"}} >
//             <p> Object:</p>
//           <input className="singleInput"
//             value={objectString}
//             onChange={e => setObjectString(e.target.value)}
//             type="string"
//           />
//           <p>Context:</p>

//             <input className="singleInput"
//                 value={contextString}
//                 onChange={e => setContextString(e.target.value)}
//                 type="string"
//             />
//             <p>Emotion:</p>
//             <input className="singleInput"
//                 value={emotionString}
//                 onChange={e => setEmotionString(e.target.value)}
//                 type="string"
//             />
//             <p></p>
//           <button onClick={chooseData}>
//             submit
//           </button>
//         </label>
//         <p>Enter a list of words, comma separated.</p>
        
//       </>
//     );
// }


const TextInput = ({handleCallback}) => {
    const [objectString, setObjectString] = useState(["object1", "object2"]);
    const [contextString, setContextString] = useState(["context1", "context2"]);
    const [emotionString, setEmotionString] = useState(["emotion1", "emotion2"]);
    const [dataString, setDataString] = useState([objectString, contextString, emotionString])

    // const objectString = React.useRef([{        "title": "Collapse", "description": "example"}]);
    // const contextString = React.useRef([{        "title": "Collapse", "description": "example"}]);
    // const emotionString = React.useRef([{        "title": "Collapse", "description": "example"}]);

    return (
      <>
        <label style={{align:"center"}} >
          <p> Object:</p>
          <input className="singleInput"
            value={objectString}
            // onChange={e => {e.preventDefault();
            //     objectString.current.value = e.target.value}}
            // type="string"
            onChange={e => setObjectString(e.target.value)}
            type="string"
          />
          <p>Context:</p>

          <input className="singleInput"
              value={contextString}
              onChange={e => setContextString(e.target.value)}
              type="string"
          />
          <p>Emotion:</p>
          <input className="singleInput"
              value={emotionString}
              onChange={e => setEmotionString(e.target.value)}
              type="string"
          />
          <p></p>
          <button onClick={e =>{e.preventDefault(); handleCallback(dataString)}}>
            submit
          </button>

        </label>
        <p>Enter a list of words, comma separated.</p>
        
      </>
    );
}

export default TextInput;