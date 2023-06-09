# 求和案例; 使用react-redux完成
1. 先将原来的组件改造成一个合法的UI组件
2. 创建容器组件; **容器组件**不能自己写, react-redux
3. 渲染的话,渲染了父组件,子组件肯定也被渲染了
4. 容器组件中的store不能够自己引入,必须通过props的形式传入
5. 使用开发者工具可以用于判断父组件和子组件之间的关系
6. App.jsx所有组件的外壳组件
7. 父组件 => 子组件; 是一组一组的key:value
8. js对象中的key:value一般是以对象的形式来展现
9. 查看有无传递过去,打印props

## 总结
### 求和案例; react-redux基本使用
1. 明确两个概念
    - UI组件, 不能使用任何redux的api,只负责页面的呈现、交互等
    - 容器组件, 负责和redux通信, 将结果交给UI组件
2. 如何创建一个容器组件 - 靠react-redux的connect函数
    - connect(mapStateToProps, mapDispatchToProps)[UI组件]
        - mapStateToProps:映射状态,返回值是一个对象
        - mapDispatchToProps:映射操作状态的方法,返回值是一个对象
3. 备注; 容器组件中的store是靠props传进去的,而不是在容器组件中直接引入





