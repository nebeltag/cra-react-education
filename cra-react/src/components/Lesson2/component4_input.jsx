import React, { useState } from 'react';
import './style.css';

export function Counter4() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="containerComp4">
      <input className="inputField" type="text" value={value} onChange={handleChange} />
      <p className="textBlock">{value}</p>
    </div>
  )
}

export default Counter4

