<template>
		<header class="d-flex ai-center jc-between">
			<input type="text" value="" placeholder="请输入楼盘/房源编号" disabled="true" placeholder-style="color:#fff"/>
			<image src="../../../static/images/service.png" mode=""></image>
			<image src="../../../static/images/code.png" mode=""></image>
		</header>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	header{
		position: sticky;
		top: 0rpx;
		width: 100%;
		height: 108rpx;
		box-sizing: border-box;
		padding: 10rpx 40rpx;
		z-index: 99999;
		background: linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%);
		input{
			width: 470rpx;
			height: 88rpx;
			background: #17A795;
			border-radius: 20rpx;
			box-shadow:0px 6px 6px 0px rgba(7,90,78,0.06);
			box-sizing: border-box;
			padding-left: 84rpx;
		}
		image{
			width: 44rpx;
			height: 44rpx;
		}
	}
</style>
