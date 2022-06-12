<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '../../store'

const { cartStore } = useStore()

const { cartProducts, totalPrice } = storeToRefs(cartStore)


</script>
<template>
	<div class="cart">
		<h2>您的购物车</h2>
		<div v-if="cartProducts.length < 1">
			<strong>购物车为空</strong>
		</div>
		<div v-else>
			<ul>
				<li v-for="item in cartProducts" :key="item.id">
				{{item.title}} - {{item.price}} - {{item.quantity}}
				</li>
			</ul>
			<button @click="cartStore.checkout()">结算：{{totalPrice}}</button>
		</div>
	</div>
</template>