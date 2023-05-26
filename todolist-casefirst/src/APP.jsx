import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  // 目前的知识
  // 初始化状态; 数据
  state = {
    // 此处的写法有点同vue中的写法
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: false },
    ],
  };

  //addTodo用于添加一个todo，接收的参数是todo对象；需要传过来就是一个对象，而不仅仅只是一个名字
  addTodo = (todoObj) => {
    //获取原todos
    const { todos } = this.state;
    //追加一个todo，进行追加操作，放在数组的开头
    const newTodos = [todoObj, ...todos];
    //更新状态，更新数组通过setState来进行操作
    this.setState({ todos: newTodos });
  };

  //updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    //获取状态中的todos
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  //deleteTodo用于删除一个todo对象；delete是一个关键字，可能会出现错误
  //自己本身这一块使用自身的id即可
  deleteTodo = (id) => {
    //获取原来的todos
    const { todos } = this.state;
    //删除指定id的todo对象；filter需要返回一个数组
    const newTodos = todos.filter((todoObj) => {
      //要根据return后面的结果来进行相应的过滤操作
      return todoObj.id !== id;
    });
    //更新状态；需要使用setState
    this.setState({ todos: newTodos });
  };

  //checkAllTodo用于全选
  checkAllTodo = (done) => {
    //获取原来的todos
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    //更新状态
    this.setState({ todos: newTodos });
  };

  //clearAllDone用于清除所有已完成的
  clearAllDone = () => {
    //获取原来的todos
    const { todos } = this.state;
    //过滤数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    //更新状态
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
