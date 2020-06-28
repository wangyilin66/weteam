<template>
	<view class="main">
	<image class="renlianbg" src="../../../../static/images/login/loginrenlian.png"></image>
	<view class="m_content">人脸识别登陆需要您上传身份 完成验证后方可实用</view>	
	<view class="footertextbox">
		<navigator url="/pages/login/components/loginpsw/index" hover-class="navigator-hover">
			<view>账号密码登录</view>
		</navigator>
		<view class="ftb_midd">|</view>
				<navigator url="/pages/login/Login" hover-class="navigator-hover">
		<view>手机快捷登录</view>
			    </navigator>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			};
		},
		
		}
</script>

<style scoped>
		.main{
			width: 100vw;
			height: 100vh;
			box-sizing: border-box;
			}
		.renlianbg{
			width: 251rpx;
			height: 251rpx;
			margin-top: 240rpx;
			margin-left: 251rpx;
		}
		.m_content{
			width:433rpx;
			height:79rpx;
			margin-top: 146rpx;
			margin-left: 158rpx;
			font-size:32rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(67,67,67,1);
			line-height:48rpx;
			text-align: center;
		}
		.footertextbox {
			margin-top: 234rpx;
			margin-left: 160rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			display: flex;
		}
		.ftb_midd {
			margin: 0 10rpx;
		}
</style>
