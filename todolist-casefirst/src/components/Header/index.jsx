import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}

	//键盘事件的回调；如果绑定事件的元素和需要操作的元素是同一个元素，那就没有必要绑定ref了
	handleKeyUp = (event) => {
		// 某一个input框中的内容，这一点很关键
		//解构赋值获取keyCode,target
		const { keyCode, target } = event
		//判断是否是回车按键
		if (keyCode !== 13) return
		//添加的todo名字不能为空，
		if (target.value.trim() === '') {
			alert('输入不能为空')
			// 不合法的时候，直接进行拦截操作
			return
		}
		//准备好一个todo对象，因为在App.jsx中我们
		const todoObj = { id: nanoid(), name: target.value, done: false }
		//将todoObj传递给App
		this.props.addTodo(todoObj)
		//清空输入
		target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		)
	}
}