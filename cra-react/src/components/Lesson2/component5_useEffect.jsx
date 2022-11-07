import React, { useState } from 'react';
import { useEffect } from 'react';
import './style.css';

export function Counter5() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="container">
      <span className="spanField">{count}</span>
      <button className="counterButton" onClick={increaseCount}>Increase +1</button>
    </div>
  )
}

export default Counter5