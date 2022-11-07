import React, { useState } from 'react';
import './style.css';


function Counter2() {
  const updateCount = () => {
    setCount(2);
  };
  const [count, setCount] = useState(0, updateCount);


  // const increaseCount = () => {
  //   setCount(count + 1);
  //   console.log('click');
  // }

  // const decreaseCount = () => {
  //   setCount(count - 1);
  //   console.log('click');
  // }
  const nullCount = () => {
    setCount(0);
    console.log('click');
  }

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    console.log('click');
  }

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1)
    console.log('click');
  }


  return (
    <div className="container">
      <span className="spanField" >{count}</span>
      <button className="counterButton" onClick={increaseCount}>Increase+1</button>
      <button className="counterButton" onClick={decreaseCount}>Decrease-1</button>
      <button className="counterButton" onClick={nullCount}>Set 0</button>

      <button className="counterButton" onClick={updateCount}>Change state</button>
    </div>
  )
}

export default Counter2;