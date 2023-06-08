import React, { Component } from "react";
// 引入store,用于获取redux中保存的状态
import store from "../../redux/store";
// 引入actionCreator,专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/count_action";

export default class Count extends Component {
  // 必须要有状态,才能引起页面的变化
  state = {
    carName: "奔驰c63",
  };
  // componentDidMount() {
  //   // 检测redux中状态的变化,只要变化,就调用render
  //   // 只要redux中的任意一个状态发生改变,就会调用
  //   // 生命周期中的this指向的都是组件实例对象
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };
  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(createIncrementAction(value * 1));
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
