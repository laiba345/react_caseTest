# 求和案例: redux完整版+异步
1. actions 
    - Object形式; 同步的
    - function形式; 异步的;变成一个对象
2. 异步操作的那5分钟,不想自己等待,交给服务员了
    - 返回的是异步action,
    - 处理异步函数需要使用到中间件redux-thunk

3. 总结; 求和案例_redux异步action版
- 明确: 延迟的动作不想交给组件自身,想交给action
- 何时需要异步action: 想要对状态进行操作,但是具体的数据靠异步任务返回
- 具体编码
    - yarn add redux-thunk, 并配置在store中
    - 创建action的函数不再返回一个对象,而是一个函数,该函数中书写异步任务
    - 异步任务有结果后, 分发一个同步的action去真正操作数据
- 备注: 异步action不是必须要写的, 完全可以自己等待异步任务的结果有了再去分发同步action





    









