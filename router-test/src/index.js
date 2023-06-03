// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from 'react-dom';
// 引入BrowserRouter,用于提供基于浏览器的路由功能
import { BrowserRouter } from 'react-router-dom';
// 引入App.jsx
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>, 
  document.getElementById('root')
)


