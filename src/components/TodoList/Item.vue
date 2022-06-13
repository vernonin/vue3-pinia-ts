<script setup lang="ts">
import { CloseBold } from '@element-plus/icons-vue'
import { ref, defineProps } from 'vue'
import useStore  from '../../store'

const { todoListStore } = useStore()
const { editTodo, removeTodo } = todoListStore

// 目前不支持从其他模块引用的类型或接口来给definProps限制类，只能用本文件中的
// const props = defineProps<defineProps>()

// 正确写法：HTML模板中可以直接使用，不需要结构了
defineProps<{
	id: number
	name: string
	done: boolean
}>()


const clickRow = (id: number) => editTodo(id)

const clickDelItem = (id: number) => removeTodo(id)

// 阻止 el-checkbox 事件冒泡
const changeSelect = (e: Event) => {
	e.stopPropagation()
}

</script>
<template>
	<el-row :gutter="20" class="item" @click="clickRow(id)">
    <el-col :span="2"><div class="grid-content ep-bg-purple" />
			<el-checkbox v-model="done" @change="clickRow(id)" @click="changeSelect">{{''}}</el-checkbox>
		</el-col>
		<el-col :span="20"><div class="grid-content ep-bg-purple" />
			<span>{{name}}</span>
		</el-col>
    <el-col :span="2"><div class="grid-content ep-bg-purple" />
			<el-button size="small" :icon="CloseBold" circle @click.stop="clickDelItem(id)"/>
		</el-col>
  </el-row>
</template>

<style scoped>
.item{
	margin-top: 10px;
	display: flex;
	align-items: center;
	border-radius: 10px;
	border-bottom: 1px solid rgb(226, 225, 225);
}
.item:hover {
	cursor:pointer;
	background-color: #eee;
}

</style>