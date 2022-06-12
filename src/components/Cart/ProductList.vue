<script setup lang="ts">
import useStore from '../../store'

const { productsStore, cartStore } = useStore()

// 获取所有数据
productsStore.getAllProducts()

</script>

<template>
	<ul>
		<li v-for="item in productsStore.all" :key="item.id">
			{{item.title}} - {{item.price}}
			<button
				@click="cartStore.addProductToCart(item)"
			>
				添加到购物车
			</button>
		</li>
	</ul>
</template>