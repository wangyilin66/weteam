<template>
	<footer>
		<view class="footer d-flex">
			<view class="left d-flex ai-center jc-around">
				<view class="common">
					<u-icon name="chat" size="36" color="#444"></u-icon>
					<view class="">更多</view>
				</view>
				<view class="common">
					<u-icon name="phone" size="36" color="#444"></u-icon>
					<view class="">去联系</view>
				</view>
			</view>
			<view class="right d-flex">
				<view class="common_btn bg_color">写跟进</view>
				<view class="common_btn">录带看</view>
			</view>
		</view>
	</footer>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
footer {
	width: 100%;
	height: 90rpx;
	background-color: #fff;
	box-shadow: 0px 0px 20px 0px rgba(1, 21, 18, 0.2);
	position: fixed;
	bottom: 0;
	.footer {
		height: 90rpx;
		width: 100%;
		box-sizing: border-box;
		.left {
			width: 310rpx;
			box-sizing: border-box;
			padding: 0 40rpx;
			.common {
				font-size: 22rpx;
				font-weight: 500;
				text-align: center;
			}
		}
		.right {
			flex: 1;
			.common_btn {
				background: #42cd94;
				width: 50%;
				height: 90rpx;
				color: #fff;
				font-size: 28rpx;
				font-weight: bold;
				letter-spacing: 2rpx;
				text-align: center;
				line-height: 90rpx;
			}
			.bg_color {
				background: #84e5bd;
			}
		}
	}
}
</style>
