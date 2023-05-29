import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {


  // 更新App中的state
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  // 过于局限
  // saveUsers = (users) => {
  //   this.setState({ users }); // 简写形式
  // };

  render() {
    // 想要拿到的内容可以优先展示出来
    // 不用此，下面批量传递即可
    // const { users } = this.state;
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
