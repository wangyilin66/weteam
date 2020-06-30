<template>
	<view class="main">

		<view class="navgationbox">
			<view class="nb_cont">
				<u-icon v-on:tap="backpage" class="c_icon" name="arrow-left" size="36"></u-icon>
				<view class="c_title">PC登录管理</view>
			</view>
		</view>

		<view v-if="pcloginflag" class="m_cont">
			<view class="m_c_title">当前登录</view>
			<view class="m_c_lis">
				<view class="c_l_left">
					<view class="l_l_left">IP:</view>
					<view>192.168.1.1.1</view>
				</view>
				<view class="c_l_right">
					<view class="l_l_left">时间:</view>
					<view>2020-06-30</view>
				</view>
			</view>
			<view class="m_c_lis m_c_lis2">
				<view class="c_l_left">
					<view class="l_l_left">地区:</view>
					<view>天津'武清</view>
				</view>
				<view class="c_l_right">
					<view class="l_l_left">登录方式:</view>
					<view>扫码登录</view>
				</view>
			</view>
			<view class="c_but" v-on:tap="offline">
				强制下线
			</view>
		</view>
		<view v-else class="m_cont">
           <image class="c_img" src="../../../../static/images/profile/offline.png"></image>
		   <view class="c_logintit">您的账号尚未在PC端登录</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				voicechecked: false,
				shakechecked: true,
				textcont:'你好我现在没空。',
				textflag:true,
				pcloginflag:true,
			};
		},
		methods: {
			backpage() {
				uni.navigateBack({
					delta: 1
				});
			},
			offline(){
				this.pcloginflag = false;
			},

		}
	}
</script>

<style scoped>
	.main {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		padding-top: 176rpx;
		background: rgba(245, 245, 245, 1);
	}

	.navgationbox {
		width: 750rpx;
		height: 176rpx;
		box-sizing: border-box;
		padding-top: 116rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		background: linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%);
		box-shadow: 0rpx 8rpx 10rpx 0rpx rgba(3, 47, 41, 0.1);
	}

	.nb_cont {
		width: 100vw;
		display: flex;
		box-sizing: border-box;
		line-height: 36rpx;
		position: relative;
	}

	.c_icon {
		color: rgba(255, 255, 255, 1);
		position: absolute;
		top: 0rpx;
		left: 40rpx;
	}

	.c_title {
		width: 100vw;
		text-align: center;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.m_cont {
		width: 670rpx;
		height: 400rpx;
		background: rgba(255, 255, 255, 1);
		border: 1rpx solid rgba(230, 230, 230, 1);
		border-radius: 4rpx;
		margin-left: 40rpx;
		margin-top: 40rpx;
		box-sizing: border-box;
	/* 	padding: 0 30rpx; */
	}

	.m_c_title {
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(68, 68, 68, 1);
		line-height: 34rpx;
		margin-top: 32rpx;
		margin-left: 30rpx;
	}

	.m_c_lis {
		width: 670rpx;
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(68, 68, 68, 1);
		display: flex;
		justify-content: space-between;
		margin-top: 42rpx;
		padding: 0 31rpx;
		box-sizing: border-box;
	}
	.l_l_left{
		margin-right: 16rpx;
	}
	.m_c_lis2{
		margin-top: 32rpx;
	}
	.c_l_left{
		display: flex;
	}
	.c_l_right{
	display: flex;
	}
	.c_but{
		width:600rpx;
		height:88rpx;
		background:rgba(71,205,151,1);
		border-radius:10rpx;
		margin-left: 35rpx;
		margin-top: 62rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 88rpx;
		border:0;
	}
	.c_img{
		width: 203rpx;
		height: 155rpx;
		margin-top: 87rpx;
		margin-left: 233rpx;
	}
	.c_logintit{
		width: 670rpx;
		text-align: center;
		font-size:28rpx;
		line-height: 28rpx;
		margin-top: 36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
</style>
