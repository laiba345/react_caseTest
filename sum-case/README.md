# redux
## redux的三个核心概念
1. action
    - 动作的对象
    - 包含两个属性
        - type；标识属性，值为字符串，唯一，必要属性
        - data；数据属性，值类型任意，可选属性
    - 例子：{ type:'ADD_STUDENT', data: { name:'tom', age: 18 }}
2. reducer
    - 用于初始化状态，加工状态
    - 加工时，根据旧的state和action，产生新的state的纯函数
3. store
    - 将state、action、reducer联系在一起的对象
    - 如何得到此对象？
    ```
        1)import {createStore} from 'redux'
        2)import reducer from './reducers'
        3)const store = createStore(reducer)
    ```
    - 此对象的功能
    ```
        1)getState(): 得到state
        2)dispatch(action): 分发action, 触发reducer调用, 产生新的state
        3)subscribe(listener): 注册监听, 当产生了新的state时, 自动调用
    ```
