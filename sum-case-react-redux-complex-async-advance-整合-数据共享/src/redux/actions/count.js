import { INCREMENT, DECREMENT } from "../constant";

// 同步action; 就是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => ({
  type: INCREMENT, data
});

export const createDecrementAction = (data) => ({
  type: DECREMENT, data
});

// 异步action; 就是指action的值为函数; 需要能够开启异步任务
// 异步action; 一般都会调用同步action;
// 异步action; 不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // 不用亲自写那个对象,可以用自己手下的
      dispatch(createIncrementAction(data))
    }, time);
  }
}
