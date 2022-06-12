import useMainStore from './module/main'
import useProductsStore from './module/product'
import useCartStore from './module/cart'

export default function useStore() {
	return {
		mainStore: useMainStore(),
		productsStore: useProductsStore(),
		cartStore: useCartStore(),
	}
}