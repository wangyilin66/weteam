<template>
	<view class="main">
		<view class="navgationbox">
			<view class="nb_cont">
				<view  v-on:tap="backpage" class="successicon">完成</view>
				<u-icon v-on:tap="backpage" class="c_icon" name="arrow-left" size="36"></u-icon>
				<view class="c_title">设置自动回复</view>
			</view>
		</view>
		<view class="maintit">
			自动回复开启状态下，聊天时当你在设置的时间内没有阅读消息， 系统将会自动发送自动回复的内容。
		</view>
		<view class="main_cont">
			<view class="vs_li v_l_border">
				<view class="v_tit">IM聊天自动回复</view>
				<u-switch class="v_but" active-color="#34C759" inactive-color="#ccc" v-model="voicechecked"></u-switch>
			</view>
			<view class="vs_li v_l_border">
				<view class="v_tit">超时自动回复</view>
			</view>
			<view class="vs_li v_l_border">
				<view class="v_tit">默认回复</view>
				<view v-if="textflag" v-on:tap="setext" class="v_morenicon">编辑</view>
				<view v-else v-on:tap="setextok" class="v_morenicon">完成</view>
			</view>
			<view v-if="textflag" class="c_textarea" >{{textcont}}</view>
			<textarea v-else class="c_textarea" v-model="textcont" placeholder="" />
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
			};
		},
		methods: {
			backpage() {
				uni.navigateBack({
					delta: 1
				});
			},
			setext(){
				this.textflag = false;
			},
			setextok(){
				this.textflag = true;
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
	.successicon{
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		position: absolute; 
		top: 0;
		right: 39rpx;
		line-height: 36rpx;
		}
		.maintit{
			width:678rpx;
			font-size:24rpx;
			line-height: 34rpx;
			font-family:PingFang SC;
			font-weight:500;
			margin-top: 20rpx;
			margin-left: 40rpx;
			color:rgba(153,153,153,1);
		}
		.main_cont{
			width: 670rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(230, 230, 230, 1);
			border-radius: 4rpx;
			margin-top: 39rpx;
			margin-left: 40rpx;
			padding-bottom: 20rpx;
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
		.v_l_border{
			border-bottom: 1rpx solid rgba(230, 230, 230, 1);
		}
		.v_morenicon{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(52,199,89,1);
			line-height: 82rpx;
		}
		.c_textarea{
			font-size:28px;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(102,102,102,1);
			margin-top: 18rpx;
			line-height: 38rpx;
			padding: 0 31rpx;
			box-sizing: border-box;
			width: 670rpx;
			min-height: 150rpx;
			max-height: 250rpx;
		}
</style>
