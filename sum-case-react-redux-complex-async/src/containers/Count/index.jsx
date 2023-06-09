// 引入Count的UI组件
import CountUI from "../../components/Count";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

/* 
    容器组件会传递给UI组件
    1、redux中所保存的状态
    2、用于操作状态的方法
*/
// mapStateToProps函数的返回值作为状态传递给了UI组件; 返回对象,形成key-value
// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key
// value就作为传递给UI组件props的value
// mapStateToProps的职责就是将state => props传给UI
function mapStateToProps(state) { // 你就是想映射状态,别人就会把state给你
  // 类似于: <CountUI n={900} />
  return {
    count: state,
  };
}
// mapDisPatchToProps函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
// 操作状态的方法
function mapDisPatchToProps(dispatch) { // 同上
  return {
    jia: (number) => {
      // 通知redux执行加法
      // dispatch({ type: "increment", data: number });
      // 之前在redux中专门有个东西用于专门处理actions
      dispatch(createIncrementAction(number));
    },
    // 简写形式
    jian: (number) => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  };
}

// 使用connect()() 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDisPatchToProps)(CountUI);
