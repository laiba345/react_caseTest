# 求和案例; react-redux(优化总结)
- (1).容器组件和UI组件整合一个文件
- (2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
- (3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
- (4).mapDispatchToProps也可以简单的写成一个对象
- (5).一个组件要和redux“打交道”要经过哪几步？
    - (1).定义好UI组件---不暴露
    - (2).引入connect生成一个容器组件，并暴露，写法如下：
            connect(
                state => ({key:value}), //映射状态
                {key:xxxxxAction} //映射操作状态的方法
            )(UI组件)
            <!-- 其中state用来保存redux中的状态 -->
    - (4).在UI组件中通过this.props.xxxxxxx读取和操作状态
!!! 操作状态永远离不开action;

    




