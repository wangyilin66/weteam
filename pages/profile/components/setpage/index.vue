<template>
	<view class="main">
		<view class="navgationbox">
			<view class="nb_cont">
				<u-icon v-on:tap="backpage" class="c_icon" name="arrow-left" size="36"></u-icon>
				<view class="c_title">设置</view>
			</view>
		</view>
		<view class="m_cont">
			<view class="c_statebox">
				<view class="c_s_left">接受新消息通知</view>
				<view class="c_s_right">已开启</view>
			</view>
			<view class="c_statetitle">
				如果想要关闭或开启新消息通知，请在手机“设置-通知”功能中， 找到app更改
			</view>
			<view class="voiceset">
				<view class="vs_li vs_voice">
					<view class="v_tit">声音</view>
					<u-switch class="v_but" active-color="#34C759" inactive-color="#ccc" v-model="voicechecked"></u-switch>
				</view>
				<view class="vs_li vs_shake">
					<view class="v_tit">震动</view>
					<u-switch class="v_but" active-color="#34C759" inactive-color="#ccc" v-model="shakechecked"></u-switch>
				</view>
			</view>
			<navigator url="/pages/profile/components/responsepage/index" hover-class="navigator-hover">

				<view class="chatset">
					<view class="vs_li">
						<view class="v_tit">聊天自动回复</view>
						<view class="v_l_right">
							<view class="v_l_r_tit">开启</view>
							<image class="moreicon" src="../../../../static/images/profile/moreicon.png"></image>
						</view>
					</view>
				</view>
			</navigator>
			<view class="pawloginset">
				<navigator url="/pages/profile/components/forgetpsw/index" hover-class="navigator-hover">
					<view class="vs_li pls_pswset">
						<view class="v_tit">修改密码</view>
						<view class="v_l_right">
							<image class="moreicon" src="../../../../static/images/profile/moreicon.png"></image>
						</view>
					</view>
				</navigator>
				<navigator url="/pages/profile/components/pcloginsetpage/index" hover-class="navigator-hover">
				
				<view class="vs_li">
					<view class="v_tit">PC登录管理</view>
					<view class="v_l_right">
						<image class="moreicon" src="../../../../static/images/profile/moreicon.png"></image>
					</view>
				</view>
				
				</navigator>
				
			</view>
			<view class="loginoutbut" v-on:tap="loginout">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				voicechecked: false,
				shakechecked: true,
			};
		},
		methods: {
			backpage() {
				uni.navigateBack({
					delta: 1
				});
			},
			loginout() {
				uni.reLaunch({
					url: '/pages/login/Login'
				});
			}

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
		margin-left: 40rpx;
		margin-top: 40rpx;
	}

	.c_statebox {
		width: 670rpx;
		height: 84rpx;
		background: rgba(255, 255, 255, 1);
		border: 1rpx solid rgba(230, 230, 230, 1);
		border-radius: 4rpx;
		line-height: 84rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 31rpx;
		box-sizing: border-box;
	}

	.c_s_left {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(68, 68, 68, 1);
	}

	.c_s_right {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.c_statetitle {
		margin-top: 20rpx;
		width: 671rpx;
		font-size: 24rpx;
		line-height: 34rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.voiceset {
		width: 670rpx;
		background: rgba(255, 255, 255, 1);
		border: 1rpx solid rgba(230, 230, 230, 1);
		border-radius: 4rpx;
		margin-top: 60rpx;
	}

	.vs_li {
		width: 670rpx;
		height: 82rpx;
		box-sizing: border-box;
		padding: 0 31rpx;
		display: flex;
		background: rgba(255, 255, 255, 1);
		justify-content: space-between;
	}

	.vs_voice {
		border-bottom: 1rpx solid rgba(230, 230, 230, 1);
		border-radius: 4rpx 4rpx 0rpx 0rpx;
	}

	.vs_shake {
		border-radius: 0rpx 0rpx 4rpx 4rpx;
	}

	.v_tit {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(68, 68, 68, 1);
		line-height: 82rpx;
	}

	.v_but {
		margin-top: 13rpx;
		/* 		width: 94rpx;
		height: 57rpx; */
	}

	.chatset {
		margin-top: 40rpx;
		box-sizing: border-box;
	}

	.chatset>.vs_li {
		border-radius: 4rpx;
		border: 1rpx solid rgba(230, 230, 230, 1);
	}

	.pawloginset {
		border: 1rpx solid rgba(230, 230, 230, 1);
		box-sizing: border-box;
		margin-top: 40rpx;
	}

	.pawloginset>.vs_li {
		border-right: 1rpx solid rgba(230, 230, 230, 1);
	}

	.pls_pswset {
		border-right: 1rpx solid rgba(230, 230, 230, 1);
		border-bottom: 1rpx solid rgba(230, 230, 230, 1);
	}

	.moreicon {
		width: 14rpx;
		height: 24rpx;
		margin-top: 30rpx;
		margin-left: 13rpx;
	}

	.v_l_r_tit {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 84rpx;
	}

	.v_l_right {
		display: flex;
	}

	.loginoutbut {
		width: 670rpx;
		height: 84rpx;
		background: rgba(255, 255, 255, 1);
		border: 1rpx solid rgba(230, 230, 230, 1);
		border-radius: 0rpx 0rpx 4rpx 4rpx;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(245, 62, 12, 1);
		text-align: center;
		line-height: 84rpx;
		margin-top: 152rpx;
	}
</style>
