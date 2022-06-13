<script setup lang="ts">
import Table from './Table.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

</script>
<template>
	 <el-card class="box-card">
		<template #header>
			<h3 style="text-align:center;">Pinia Todo-List案例</h3>
			<Header />
		</template>
    <Table />
		<Footer />
  </el-card>
</template>
<style>
.box-card{
	width: 500px;
}
</style>