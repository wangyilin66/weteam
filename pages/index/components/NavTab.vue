<template>
	<view class="nav-tab-box d-flex ai-center jc-between">
		<view class="nav-item" v-for="(item, index) in navList" :key="index" @click="handleClick(index)">
			<view class="pic-box d-flex jc-center ai-center">
				<image :src="item.icon" ></image>
			</view>
			<view class="title">
			{{ item.title }}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		navList: {
			type: Array
		}
	},
	data() {
		return {};
	},
	methods:{
		handleClick(value){
			this.$emit('handleClickCheck',value)
		}
	}
};
</script>

<style lang="scss" scoped>
.nav-tab-box {
	width: 100%;
	height: 156rpx;
	box-sizing: border-box;
	padding: 0 74rpx;
	.nav-item {
		width: 98rpx;
		font-size: 24rpx;
		text-align: center;
		color: #fff;
		.pic-box{
			image {
				width: 53rpx;
				height: 54rpx
			}
		}
		.title{
			margin-top: 12rpx;
			line-height: 1;
		}
	}
}
</style>
