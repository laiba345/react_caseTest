import React, { Component } from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";
// 引入redux; 只需要引入最核心的store

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}
