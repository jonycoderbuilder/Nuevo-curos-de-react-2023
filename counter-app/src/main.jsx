import React from 'react';
import ReactDOM from 'react-dom/client';

//import {App} from "./HelloWorldApp";
//import {HelloWorldApp1} from './FirstApp';

import "./styles.css";
//import { FirstApp1 } from './FirstApp1';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
       
        <CounterApp  value={10}></CounterApp>
    </React.StrictMode>
)