/**
 * @IProduct
 * id: 商品id
 * title：商品名称
 * price：商品价格
 * inventory：库存
 */
export interface IProduct {
	id: number
	title: string
	price: number
	inventory: number
}

const _products: IProduct[] = [
	{ id: 1, title: '《追风筝的人》', price: 45.00, inventory: 1676},
	{ id: 2, title: '《活着》', price: 29.00, inventory: 2},
	{ id: 3, title: '《白夜行》', price: 44.00, inventory: 5625},
	{ id: 4, title: '《麦田里的守望者》', price: 23.00, inventory: 3546},
]

export const getProducts = async () => {
	await wait(100)
	return _products
}

export const buyProducts = async () => {
	await wait(100)
	return Math.random() > 0.3
}

async function wait(delay: number) {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve()
		}, delay)
	})
}