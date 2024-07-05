import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import ReactGA from 'react-ga';

import GA4React from "ga-4-react";
const ga4react = new GA4React("G-8VSG4RFGVV");
ga4react.initialize().then().catch()


// ReactGA.initialize('G-8VSG4RFGVV');

// ReactDOM.render(<App />, document.getElementById('root'));



// import ReactGA from 'react-ga';


// ReactGA.initialize('G-8VSG4RFGVV');

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
