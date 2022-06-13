/**
 * 该文件是模拟 todolist 案例的网络请求数据
 */

/**
 * @ITodoItem
 * id: id
 * name：任务名称
 * done：是否已完成
 */
export interface ITodoItem {
	id: number
	name: string
	done: boolean
}

// todolist 初始数据
let _todoList: ITodoItem[] = [
	{ id: 0, name: '买车', done: false },
	{ id: 1, name: '买房', done: false },
]

// 获取数据
export const getTodoList= async () => {
	return new Promise<ITodoItem[]>((resolve) => {
		setTimeout(()=> {
			resolve(_todoList)
		}, 100)
	})
}

// 添加数据
export const addTodoList = (name: string) => {
	return new Promise<{msg: string}>((resolve) => {
		setTimeout(() => {
			_todoList = [{id: _todoList.length, name, done: false}, ..._todoList]
			resolve({msg: '添加成功'})
		}, 100)
	})
}

// 修改数据
export const editTodoList = (id: number) => {
	return new Promise<{msg: string}>((resolve) => {
		setTimeout(() => {
			let _editTodoList = _todoList.map(item => {
				if(item.id === id) {
					item.done = !item.done
				}

				return item
			})
			_todoList = _editTodoList
			resolve({msg: '修改成功'})
		}, 100)
	})
}

// 删除数据
export const removeTodoList = (id: number) => {
	return new Promise<{msg: string}>((resolve) => {
		let _editTodoList = _todoList.filter(item => item.id !== id)

		_todoList = _editTodoList
		resolve({msg: '删除成功'})
	})
}

// 切换全选
export const changeTodoList = (done: boolean) => {
	return new Promise<{msg: string}>((resolve) => {
		setTimeout(() => {
			let _editTodoList = _todoList.map(item => {
				item.done = done

				return item
			})

			_todoList = _editTodoList
			resolve({msg: '修改成功'})
		}, 100)
	})
}

// 清除已完成
export const clearDone = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			let _editTodoList = _todoList.filter(itme => !itme.done)

			_todoList = _editTodoList
			resolve({msg: '修改成功'})
		}, 100);
	})
}