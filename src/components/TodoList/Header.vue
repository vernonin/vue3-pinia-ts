<script setup lang="ts">
import { ref } from 'vue'
import useStore from '../../store'

const { todoListStore } = useStore()
const { addTodo } = todoListStore

const input = ref('')

const submit = () => {
	if(input.value.trim() === '') {
		return
	}

	addTodo(input.value)
	input.value = ''
}

</script>
<template>
	<el-input
		v-model="input"
		placeholder="请输入任务后按回车：打代码"
		clearable
		@keyup.enter="submit"
	/>
</template>