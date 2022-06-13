# vue3 pinia ts

## 开始
### 下载项目
```
git clone https://github.com/vernonin/vue3-pinia-ts.git
```

### 安装依赖
```
cd vue3-pinia-ts

npm install
```
### 运行
```
npm run dev
```



## 目录结构
```
> src/

| -- api     模拟网络请求
| -- |-- shop   购物车案例数据
| -- |-- todoList   todoList案例数据
| -- |
| -- components   组件
| -- | -- Cart   购物车组件文件夹
| -- | -- | -- index.vue   购物车案例组件
| -- | -- | -- ProductList.vue   使用商品列表的组件
| -- | -- | -- ShoppingCart.vue   购物车的组件
| -- | -- TodoList   todoList组件文件夹
| -- | -- | -- Footer.vue   TodoList的底部组件
| -- | -- | -- Header.vue   TodoList的头部组件
| -- | -- | -- index.vue    TodoList的组件
| -- | -- | -- Item.vue     TodoList的每一任务组件
| -- | -- | -- Table.vue    TodoList的任务列表组件
| -- | -- Count.vue   了解使用pinia的组件
| -- |
| -- store   pinia仓库
| -- | -- module   存放每个仓库
| -- | -- | -- cart.ts   购物车仓库
| -- | -- | -- main.ts   练习pinia的仓库
| -- | -- | -- product.ts   所有商品仓库
| -- | -- | --  todoList.ts   TodoList案例仓库
| -- | -- index.ts   组合所有仓库
| -- |
| -- utils   工具文件夹
| -- | -- request.ts   封装axios
| -- |
| -- App.vue   所有组件的父组件 
| -- |
| -- mian.ts   入口文件


```



## pinia 的使用

### 安装 pinia
```
npm i pinia
```
### 基本使用
> 1. 引入pinia
```
main.ts


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
```

> 2. 定义 counter 仓库
```
store/counter.ts


// defineStore 创建仓库
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

```

> 3. 在创建中使用
```
demo.vue

import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
  },
}
```

