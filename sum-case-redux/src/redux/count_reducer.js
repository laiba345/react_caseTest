/* 
    1、该文件用于创建一个Count组件服务的reducer; reducer的本质就是一个函数
    2、reducer函数会接到两个参数, 分别为:之前的状态(preState); 动作对象(action)
*/
// 更为推荐的写法, 初始化状态
const initState = 0
export default function countReducer(preState=initState, action) {
    // 初始化的过程
    // if(preState === undefined) preState = 0
    // 从action对象中,取出type和state
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        case 'increment': // 如果是加
            return preState + data
        case 'decrement': // 如果是减
            return preState - data
        default:
            return preState
    }
}