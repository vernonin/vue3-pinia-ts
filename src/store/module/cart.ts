import { defineStore } from 'pinia'
import { IProduct, buyProducts } from '../../api/shop'
import useProductsStore from './product'

/**
 * 将 IProduct 接口结构给 CatProduct 并将 inventory 去掉
 * @CartProduct
 * id: 商品名称
 * title：商品名称
 * price：商品价格
 * quantity: 购物车中的商品数量
 */
type CartProduct = {
	quantity: number
} & Omit<IProduct, 'inventory'>

const useCartStore = defineStore('cart', {
	state: () => {
		return {
			cartProducts: [] as CartProduct[],
			checkoutStatus: null as null | string,
		}
	},

	getters: {
		// 计算购物车商品总价格
		totalPrice(state): number {
			return state.cartProducts.reduce((total, item) => {
				return total + item.price * item.quantity
			}, 0)
		}
	},

	actions: {
		/**
		 * 添加购物车
		 * 1. 判断商品有没有库存
		 * 2. 判断商品是否已存在购物车中
		 * 3. 更新商品库存
		*/
		addProductToCart(product: IProduct) {
			if(product.inventory < 1) {
				alert('没有库存了，十分抱歉！')
				return
			}

			const cartIetem = this.cartProducts.find(item => item.id === product.id)
			if(cartIetem) {
				cartIetem.quantity++
			} else {
				this.cartProducts.push({
					id: product.id,
					title: product.title,
					price: product.price,
					quantity: 1,
				})
			}
			
			// 更新库存
			const productsStore = useProductsStore()
			productsStore.decrementProduct(product)
		},

		/**
		 * 接收
		 */
		async checkout() {
			const res = await buyProducts()
			this.checkoutStatus = res ? '结算成功' : '结算失败'

			// 清空购物车
			if (res) {
				this.cartProducts = []
				alert('结算成功')
			} else {
				alert('结算失败')
			}
		},
	}
})

export default useCartStore