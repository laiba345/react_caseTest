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

## 求和案例 ~ 纯享版
- 想要拿到select选择框里面的内容,**必须要使用打标识的形式来处理**
- App组件是所有组件的外壳组件,书写好别的组件以后,你要是想用的话,必须App组件中注册并使用
- 加上点击事件onClick, 用户在进行展示数据的时候,只需要用到一个 {  }
- select取数据,一开始取到的是字符串形式的数据,通过 *1 进行强制类型的转换


