import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../../api/shop'

const useProductsStore = defineStore('products', {
	state: () => {
		return {
			all: [] as IProduct[] // 所有商品列表
		}
	},

	getters: {},

	actions: {
		// 获取所有商品
		async getAllProducts () {
			const res = await getProducts()
			this.all = res
		},

		decrementProduct(product: IProduct) {
			const item = this.all.find(item => item.id === product.id)
			if(item) {
				item.inventory--
			}
		}
	},
})

export default useProductsStore