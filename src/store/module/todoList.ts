import { defineStore } from "pinia";

import {
	ITodoItem,
	getTodoList,
	addTodoList,
	editTodoList,
	changeTodoList,
	clearDone,
	removeTodoList,
} from '../../api/todoList'

const useTodoListStore = defineStore('todoList', {
	state: () => {
		return {
			todoListData: [] as ITodoItem[]
		}
	},

	getters: {
		totalNumber (state): number {
			return state.todoListData.length
		},
		doneNumber(state): number {
			let num = 0
			state.todoListData.forEach(item => {
				if(item.done) {
					num++
				}
			})
			return num
		}
	},

	actions: {
		// 获取所有todo数据
		async getAllTodoListData() {
			let res = await getTodoList()
			this.todoListData = res
		},

		// 添加todo
		async addTodo(name: string) {	
			await addTodoList(name)
			this.getAllTodoListData()
 		},

		// 修改todo
		async editTodo(id: number) {
			await editTodoList(id)
			this.getAllTodoListData()
		},

		// 删除todo
		async removeTodo(id: number) {
			await removeTodoList(id)
			this.getAllTodoListData()
		},

		// 改变所有
		async changeTodo(done: boolean) {
			await changeTodoList(done)
			this.getAllTodoListData()
		},

		// 清除已完成
		async clearTodo() {
			await clearDone()
			this.getAllTodoListData()
		},
	}
})

export default useTodoListStore