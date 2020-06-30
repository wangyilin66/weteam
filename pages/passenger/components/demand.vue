<template>
	<view>
		<view class="">
			<u-form-item label="首付预算" label-width="160"><u-input v-model="item.budget" /></u-form-item>
			<u-form-item label="购房区域" label-width="160"><u-input v-model="item.region" /></u-form-item>
			<u-form-item label="交房类型" label-width="160">
				<u-input v-model="item.houseTypes" type="select" :select-open="actionSheetShowHouse" @click="actionSheetShowHouse = true" />
			</u-form-item>
			<u-form-item label="居室"><u-input v-model="item.house" /></u-form-item>
			<u-form-item label="面积"><u-input v-model="item.area" /></u-form-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
