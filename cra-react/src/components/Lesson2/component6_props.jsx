import React, { useState } from 'react';
import './style.css';


function Child(props) {
  return (
    <span className='spanField'>{props.number}</span>
  )
}

function Button(props) {
  return (
    <button className='counterButton' onClick={props.onClick}>Click!</button>
  )
}
function Example() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="container">
      <Child number={count} />
      <Button onClick={changeCount} />
    </div>
  )
}

export default Example
