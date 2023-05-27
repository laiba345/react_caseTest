# react中一个个重要的练习案例
## case1: todoList
### 相关知识点
1. 拆分组件、实现静态组件。注意className、style的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
    - 某个组件使用：放在自身的state中
    - 某些组件使用：放在他们共同的父组件state中，(状态提升)
3. 关于父子之间通信
    - 【父组件】给【子组件】传递数据：通过props传递
    - 【子组件】给【父组件】传递数据：通过props传递，要求父先给子传递一个函数
4. 注意defaultChecked和checked的区别，类似还有defaultValue和value
    - defaultChecked只在第一次有用
5. 状态在哪里，操作状态的方法就写在那里

