import { INCREMENT, DECREMENT } from "../constant"
// 更为推荐的写法, 初始化状态
const initState = 0
export default function countReducer(preState=initState, action) {
    // 初始化的过程
    // if(preState === undefined) preState = 0
    // 从action对象中,取出type和state
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT: // 如果是加
            return preState + data
        case DECREMENT: // 如果是减
            return preState - data
        default:
            return preState
    }
}