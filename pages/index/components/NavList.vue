<template>
	<view class="nav d-flex jc-between flex-wrap  ">
		<view class="nav_item" v-for="item in navLists" :key="item._id">
			<view class="pic_box">
				<image :src="item.imgUrl"></image>
			</view>
			<view class="title">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		navLists:{
			type:Array
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.nav {
	width: 100%;
	height: 336rpx;
	background: #fff;
	border-radius: 80rpx 80rpx 0 0;
	box-shadow: 0px -16px 16px 0px rgba(11, 75, 66, 0.14);
	position: absolute;
	bottom: 0;
	box-sizing: border-box;
	padding: 60rpx 58rpx;
	.nav_item {
		text-align: center;
		width: 98rpx;
		height: 92rpx;
		margin-right: 36rpx;
		font-size: 24rpx;
		color: #444;
		&:nth-child(5n + 5) {
			margin-right: 0;
		}
		.pic_box{
			height: 58rpx;
			image{
				width: 57rpx;
			}
		}
		.title{
			line-height: 1;
			margin-top: 10rpx;
		}
	}
}
</style>
