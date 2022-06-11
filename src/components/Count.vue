<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store'

const mainStore = useMainStore()

/**
* 解构store中的数据：
* 	错误写法：const { counter, msg } = mainStore
*   解决办法：使用 storeToRefs 转成响应式数据
*/
const { counter, msg, fullName } = storeToRefs(mainStore)


//  ----------修改 store 中的数据----------

// 方式一：最简单的方式
const increment = (): void => {
	mainStore.counter ++
}

// 方式二：如果修改多个数据，建议使用 $patch 批量更新
// const batchUpdate = (): void => {
// 	mainStore.$patch({
// 		counter: 10,
// 		msg: '改变了，老铁！！！',
// 	})
// }

// 方式三： $patch - 函数
// const batchUpdate = (): void => {
// 	mainStore.$patch(state => {
// 		state.counter = 10
// 		state.msg = '改变了，老铁！！！'
// 	})
// }

// 方式四：逻辑比较多的时候，可以封装到 actions 中做处理
const batchUpdate = (): void => {
	mainStore.changeState(2)
}

</script>
<template>
	<hr>
	<h2>-----------count访问pinia仓库数据-----------</h2>
	<button @click="batchUpdate">批量修改</button>
	<br />
	<button @click="increment">clicked {{mainStore.counter}} times</button>
	<h3>{{mainStore.fullName}}</h3>
	<h3>{{mainStore.fullName}}</h3>
	<h3>{{fullName}}</h3>

	<h4>{{mainStore.msg}}</h4>
	<h3>当前值：{{counter}}</h3>
	<h3>当前消息：{{msg}}</h3>

	<hr>
</template>