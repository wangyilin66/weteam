<template>

	<view class="main">
		<view class="userbox">

		</view>
		<view class="bannerbox">
			<!-- <image src="" mode=""></image> -->
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				code: '',
				upkey: false,
				phoneflag: false,
				codeflag: false,
				codetime: true,
				codetext: "重新获取(60s)",
				loginflag: true,
				settimeobj: null,
			};
		}
	}
</script>

<style scoped>
	.main {
		width: 100vw;
		height: 100vh;
	}

	.userbox {
		width: 100vw;
		height: 278rpx;
		background:linear-gradient(-75deg,rgba(17,183,161,1) 22%,rgba(65,205,147,1) 100%);
		box-shadow:0px 10px 22px 0px rgba(1,30,26,0.2);
	}
</style>
