import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生的html标签通过a标签来进行跳转操作 */}
              {/* 跳转是通过Link来实现 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由;*/}
                {/* 注册路由是通过Route标签来实现 */}
                {/* 标签的写法通过component={About}来实现 */}
                <switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* <Route path="/home" component={Test} /> */}
                  <Redirect to="/about" />
                </switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
