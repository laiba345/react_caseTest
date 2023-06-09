// 引入react核心库
import React from "react";
// 引入reactDOM
import ReactDOM from "react-dom";
// 引入APP
import App from "./App";
// 引入store
import store from "./redux/store";

// 渲染
ReactDOM.render(<App />, document.getElementById("root"));

// 监测redux中状态的改变,如redux的状态发生了改变,那么重新渲染
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
