import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Challenge2 from './challenge2';
import Challenge1 from './challenge1';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>Coding challenge</h1>
    <br /><br />
        <Challenge1></Challenge1>
   
    <br />
    <Challenge2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
