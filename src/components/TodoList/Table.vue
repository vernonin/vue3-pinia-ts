<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useStore from '../../store'
import Item from './Item.vue'

const { todoListStore } = useStore()

onMounted(() => {
	todoListStore.getAllTodoListData()
})


</script>

<template>
	<Item
		v-for="todoItem in todoListStore.todoListData"
		:key="todoItem.id"
		:id="todoItem.id"
		:name="todoItem.name"
		:done="todoItem.done"
	/>
</template>