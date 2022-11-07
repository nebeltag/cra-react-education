import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

// const appMessage = 1;

function App(props) {
  return (
    <div className="App">
      <header className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        My First React App
        <h1>Hello, {props.name}!</h1>
        <div style={{ paddingTop: '25px', fontSize: '50px', fontWeight: 'bold' }}>
          Inline Styles
        </div>
        <Message const appMessage={'Hello, I am a message from App.js!'} />
      </header>
    </div >
  );
}

export default App;
