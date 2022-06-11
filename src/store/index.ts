import { defineStore } from "pinia";


export const useMainStore = defineStore('main', {
	/**
	 * 用于存放数据的
	 * 1.必须是函数
	 * 2.必须是箭头函数
	 * @returns 
	 */
	state: () => {
		return {
			counter: 0,
			msg: '我是在useMainStore中一个普通的字符串',
			firstName: 'Paul',
			lastName: 'Walker',
		}
	},

	/**
	 * 类似于vue中的computed，用于封装计算属性，有缓存的功能
	 */
	getters: {
		// 函数接收一个可选的参数：state 状态对象
		fullName(state): string {
			console.log('full被调用了..');
			
			return `${state.firstName}·${state.lastName}`
		}
	},

	/**
	 * 类型与组件中的methods，封装业务逻辑，修改 state，可以进行一步操作
	 */
	actions: {
		changeState(num: number): void {
			// this.counter += num
			// this.msg = '改变了，老铁！！！'

			// this.$patch({counter: this.counter++, msg: '改变了，老铁！！！'})

			this.$patch(state => {state.counter += num, state.msg = '改变了，老铁！！！'})
		}
	}
})