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

store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
