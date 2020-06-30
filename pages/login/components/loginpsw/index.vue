<template>
	<view class="mian">
		<u-toast ref="uToast" />
		<image class="logoimg" src="../../../../static/images/login/loginlogo.png"></image>
		<view class="inputbox">
			<view class="ib_phone">
				<input class="phoneinp" @input="handlephonekeyup($event)" type="text" placeholder-style='color:rgba(205,207,207,1);'
				 v-model="phone" placeholder="请输入手机号" />
				<!-- 				<view v-if="codetime" class="ib_phoneright" v-on:click="handleSendPhone">获取验证码</view>
				<view v-else class="ib_phonerighttrue">{{codetext}}</view> -->
				<view v-if="phoneflag" class="ib_warningbox">*请输入正确手机号码</view>
				<view v-else></view>
			</view>
			<view class="ib_code">
				<input v-if="changeinpflag" class="phoneinp" type="password" @input="handlecodekeyup($event)" placeholder-style='color:rgba(205,207,207,1);'
				 v-model="code" placeholder="请输入密码" />
				<input v-else class="phoneinp" type="text" @input="handlecodekeyup($event)" placeholder-style='color:rgba(205,207,207,1);'
				 v-model="code" placeholder="请输入密码" />
				<view class="ib_phoneright">
					<image v-if="changeinpflag" class="seepwdicon" v-on:tap="handlechangeinput1" src="../../../../static/images/login/loginkeshi.png"></image>
					<image v-else class="seepwdicon2" v-on:tap="handlechangeinput2" src="../../../../static/images/login/loginbukeshi.png"></image>
				</view>
				<view v-if="codeflag" class="ib_warningbox">{{pswtext}}</view>
				<view v-else></view>
			</view>
		</view>
		<button v-if="loginflag" class="handleToLogin" @click="handleToLoginfalse" type="default">立刻登录</button>
		<button v-else class="handleToLogintrue" @click="handleToLogin" type="default">立刻登录</button>
		<view class="footertextbox">
			<navigator url="/pages/login/Login" hover-class="navigator-hover">
				<view>手机快捷登录</view>
			</navigator>
			<view class="ftb_midd">|</view>
					<navigator url="/pages/login/components/loginface/index" hover-class="navigator-hover">
			<view>人脸识别登录</view>
				    </navigator>
		</view>
		<navigator url="/pages/login/components/forgetpsw/index" hover-class="navigator-hover">
		<view class="fogetpsw">忘记密码</view>
		  </navigator>
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
				changeinpflag: true,
				pswtext:'*密码错误'
			};
		},
		methods: {
			handlechangeinput1() {
				this.changeinpflag = false;


			},
			handlechangeinput2() {
				this.changeinpflag = true;

			},
			handlephonekeyup() {
				// console.log(this.phone);
				// let ptext = this.phone;
				// let phoneflag = this.$u.test.mobile(ptext);
				// console.log(phoneflag);
				// if(!phoneflag){
				// 	this.phoneflag = true;
				// }else{
				// 	this.phoneflag = false;
				// }
				let ptext = this.phone;
				let phoneflag = this.$u.test.mobile(ptext);
				if (phoneflag) {
					this.phoneflag = false;
				}
				if (phoneflag && this.code.length > 0) {
					this.loginflag = false;
				} else {
					this.loginflag = true;
				}
			},
			handlecodekeyup() {
				let ptext = this.phone;
				let phoneflag = this.$u.test.mobile(ptext);
				
				if (this.code.length > 0) {		
					this.codeflag = false;
				} else {
					this.codeflag = true;
					this.pswtext = '*请输入密码';
				}
				if (phoneflag && this.code.length > 0) {
					this.loginflag = false;
				} else {
					this.loginflag = true;
				} 
			
			},
			// handleSendPhone(){
			// 	let ptext = this.phone;
			// 	let phoneflag = this.$u.test.mobile(ptext);
			// 	console.log(phoneflag);
			// 	if(!phoneflag){
			// 		this.phoneflag = true;
			// 	}else{
			// 		let nub = 60;
			// 		let that = this;
			// 		this.phoneflag = false;
			// 		this.codetime = false;
			// 		this.settimeobj = setInterval(function(){

			// 			let str = '重新获取('+ (--nub) + 's)';
			// 			that.codetext = str;
			// 			if(nub == 0){
			// 			clearInterval(that.settimeobj);
			// 			that.codetime = true;
			// 			that.settimeobj = null;
			// 			}

			// 		},1000);
			// 	}
			// },
			handleToLogin() {
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			handleToLoginfalse() {
				let ptext = this.phone,codetext = this.code;
				let phoneflag = this.$u.test.mobile(ptext);
				if (!phoneflag) {
					this.phoneflag = true;
					// this.$refs.uToast.show({
					// 	title: '请填写正确的手机号',
					// 	type: 'warning',
					// })
				}
				if(codetext.length == 0){
					this.pswtext = '*请输入密码';
					this.codeflag = true;
				}
			}
		},
		onUnload() {
			if (this.settimeobj != null) {
				clearInterval(this.settimeobj);
			}
		}
	}
</script>

<style scoped>
	.mian {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		position: relative;
	}

	.logoimg {
		width: 176rpx;
		height: 203rpx;
		margin-top: 172rpx;
		margin-left: 287rpx;
		margin-bottom: 69rpx;
	}

	.inputbox {
		width: 630rpx;
		margin-left: 60rpx;
	}

	.ib_phone {
		width: 630rpx;
		height: 118rpx;
		display: flex;
		border-bottom: 1px solid rgba(229, 229, 229, 1);
		position: relative;
		/* 	justify-content: space-between; */
	}

	.ib_code {
		width: 630rpx;
		display: flex;
		height: 118rpx;
		border-bottom: 1px solid rgba(229, 229, 229, 1);
		position: relative;
		/* 	justify-content: space-between; */
	}

	.ib_warningbox {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(244, 61, 12, 1);
		position: absolute;
		top: 129rpx;
		left: 0;
	}

	.phoneinp {
		height: 118rpx;
		width: 415rpx;
		padding-top: 29rpx;
		line-height: 118rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(67, 67, 67, 1);
	}

	.ib_phoneright {
		width: 215rpx;
		height: 118rpx;
		padding-top: 0rpx;
		line-height: 118rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(153, 153, 153, 1);
		text-align: right;
	}

	.ib_phonerighttrue {
		width: 215rpx;
		height: 118rpx;
		padding-top: 15rpx;
		line-height: 118rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(71, 205, 151, 1);
		text-align: right;
	}

	.handleToLogin {
		width: 630rpx;
		height: 99rpx;
		background: rgba(116, 229, 183, 1);
		border-radius: 10rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 99rpx;
		border: 0;
		margin-top: 125rpx;
	}

	.handleToLogin::after {
		border: none !important;
	}

	.handleToLogintrue {
		width: 630rpx;
		height: 99rpx;
		background: rgba(71, 205, 151, 1);
		border-radius: 10rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 99rpx;
		border: 0;
		margin-top: 125rpx;
	}

	.handleToLogintrue::after {
		border: none !important;
	}

	.footertextbox {
		margin-top: 44rpx;
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

	.seepwdicon {
		float: right;
		width: 38rpx;
		height: 26rpx;
		margin-top: 60rpx;
		line-height: 0;
	}

	.seepwdicon2 {
		float: right;
		width: 38rpx;
		height: 32rpx;
		margin-top: 58rpx;
		line-height: 0;
	}

	.fogetpsw {
		font-size: 32rpx;
		width: 129rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(71, 205, 151, 1);
		margin-top: 120rpx;
		margin-left: 560rpx;
	}
</style>
