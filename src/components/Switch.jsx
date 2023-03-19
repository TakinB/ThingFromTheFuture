import React from 'react';
import './Switch.css';

const Switch = ({isOn, handleToggle}) => {
  return (
    <div className="customised-toggle" style={{display:"flex"}}>
      <p style={{marginRight:"0.5rem"}}>Silly mode</p>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#363031' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <p style={{marginLeft:"1rem"}}>customised mode</p>
      </div>
  );
};

export default Switch;