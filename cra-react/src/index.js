import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Message from './Message';
import Counter1 from './components/Lesson2/component1.jsx';
import Counter2 from './components/Lesson2/component2.jsx';
import Counter3 from './components/Lesson2/component3_class_state';


const myName = 'Maxim';
const showRed = true;
const message = 'Hello, I am message from index.js!';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={myName} showRed={showRed} />
    <Message message={message} />
    <Counter1 />
    <Counter2 />
    <Counter3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
