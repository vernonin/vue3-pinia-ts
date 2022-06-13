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
			<table>
				<thead>
					<tr>
						<th>图书名称</th>
						<th>图书价格</th>
						<th>购买数量</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="item in cartProducts"
						:key="item.id"
					>
						<td>{{item.title}}</td>
						<td>{{item.price}}</td>
						<td>{{item.quantity}}</td>
					</tr>
				</tbody>
			</table>
			<ul>
				<li v-for="item in cartProducts" :key="item.id">
				{{item.title}} - {{item.price}} - {{item.quantity}}
				</li>
			</ul>
			<button @click="cartStore.checkout()">结算：{{totalPrice}}</button>
		</div>
	</div>
</template>

<style>
	table{border: 1px solid #c7c7c7;border-collapse: collapse;}
	thead{color: #5c6b77; background-color: #f6f6f6;}
	th, td{padding: 8px 20px; border: 1px solid #c7c7c7;}
</style>
