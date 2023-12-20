import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallBackHook } from './06-memos/CallBackHook';
//import { Memorize } from './06-memos/Memorize';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocuesScreen } from './04-useRef/FocuesScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import "./08-useReducer/intro-reducer";
import { TodoApp } from './08-useReducer/TodoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp></TodoApp>
  //</React.StrictMode>,
)

