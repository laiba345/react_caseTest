import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false }; //标识鼠标移入、移出

  //鼠标移入、移出的回调
  handleMouse = (flag) => {
    // 保证了onMouseEnter 和 onMouseLeave 返回的是一个返回值；写成高阶函数
    return () => {
      this.setState({ mouse: flag });
    };
  };

  //勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  //删除一个todo的回调
  //下方的onClick需要指定一个回调；这样此处就不要使用到高阶函数的形式
  handleDelete = (id) => {
    // 给予用户很好的提示；
    if (window.confirm("确定删除吗？")) {
      // props不仅可以接收参数，还可以接收输送过来的函数，这一点也很关键
      // 联系父组件删除该id即可
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
