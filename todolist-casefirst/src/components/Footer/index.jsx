import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  //全选checkbox的回调
  handleCheckAll = (event) => {
    // 通过event.target.checked才能识别出来是否被勾选
    this.props.checkAllTodo(event.target.checked);
  };

  //清除已完成任务的回调
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    //接收相应的内容是在render函数中来进行获取操作的，通过
    const { todos } = this.props;
    //已完成的个数；使用一个数组去进行调用操作
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    //总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
