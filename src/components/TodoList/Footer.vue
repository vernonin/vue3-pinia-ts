<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import useStore from '../../store'

const { todoListStore } = useStore()
const { changeTodo, clearTodo } = todoListStore
const { totalNumber, doneNumber } = storeToRefs(todoListStore)

const allchecked = ref(false)


// 监听已完成的任务数是否等于总任务数
watch(doneNumber, (newValue) => {
	if(newValue === totalNumber.value && newValue !== 0) {
		allchecked.value = true
	} else {
		allchecked.value = false
	}
})

// 全选
const changeAll = () => {
	changeTodo(allchecked.value)
}

// 清除已完成
const clearDone = () => {
	clearTodo()
}

</script>

<template>
	<div class="footer">
		<div>
			已完成 <strong>{{doneNumber}} / {{totalNumber}}</strong> 个任务
		</div>
		<div>
			<el-checkbox size="small" v-model="allchecked" @change="changeAll" label="全选" border />
		</div>
		<div>
			<el-button size="small" plain @click="clearDone">清除已完成</el-button>
		</div>
	</div>
</template>

<style scoped>
.footer{
	padding-top: 10px;
	display: flex;
	justify-content: space-between;
}
.center{
	text-align: right;
}
</style>
