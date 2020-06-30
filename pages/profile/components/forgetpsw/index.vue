<template>
	
	<view class="main">
	<u-toast ref="uToast" />
	<view class="popupbox" v-if="forgetsendflag">

	</view>
	<view class="pb_cont"  v-if="forgetsendflag">
		<image class="p_c_pic" src="../../../../static/images/login/genggaiok.png"></image>
		<view class="p_c_tit">密码修改成功</view>
	</view>
		<view class="navgationbox">
			<view class="nb_cont">
				<u-icon v-on:tap="backpage" class="c_icon" name="arrow-left" size="36"></u-icon>
				<view class="c_title">修改密码</view>
			</view>
		</view>
		<view class="inputbox">
			<view class="ib_phone">
				<input class="phoneinp" @input="handlephonekeyup($event)" type="text" placeholder-style='color:rgba(205,207,207,1);'
				 v-model="phone" placeholder="请输入手机号" />
				<view v-if="codetime" class="ib_phoneright" v-on:click="handleSendPhone">获取验证码</view>
				<view v-else class="ib_phonerighttrue">{{codetext}}</view>
				<view v-if="phoneflag" class="ib_warningbox">*请输入正确手机号码</view>
				<view v-else></view>
			</view>
			<view class="ib_code">
				<input class="phoneinp" type="text" @input="handlecodekeyup($event)" placeholder-style='color:rgba(205,207,207,1);'
				 v-model="code" placeholder="请输入验证码" />

				<view v-if="codeflag" class="ib_warningbox">*请输入正确验证码</view>
				<view v-else></view>
			</view>
			<view class="ib_code">
				<input class="phoneinp newpswinp" type="text" @input="handlenewpswkeyup($event)" placeholder-style='color:rgba(205,207,207,1);'
				 v-model="newpaw" placeholder="请输入新密码 (最少6位, 数字+字母)" />
				<view v-if="newpswflag" class="ib_warningbox">*最少六位，数字+字母</view>
				<view v-else></view>
			</view>
		</view>
	  		<button v-if="loginflag" class="handleToLogin" @click="handleToLoginfalse" type="default">提交</button>
	  		<button v-else class="handleToLogintrue" @click="handleToLogin" type="default">提交</button>
	  
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
				newpaw:'',
				newpswflag:false,
				forgetsendflag:false
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
						if (phoneflag && this.code.length > 0 && this.newpaw.length > 0) {
							this.loginflag = false;
						} else {
							this.loginflag = true;
						}
					},
					handlecodekeyup() {
						let ptext = this.phone;
						let phoneflag = this.$u.test.mobile(ptext);
						if(this.code.length > 0){
							this.codeflag = false;
						}else{
							this.codeflag = true;
						}
		
						if (phoneflag && this.code.length > 0 && this.newpaw.length > 0) {
							this.loginflag = false;
						} else {
							this.loginflag = true;
						}
					},
					handlenewpswkeyup(){
						let ptext = this.phone;
						let phoneflag = this.$u.test.mobile(ptext);
						
						let newpsw = this.newpaw;
						if(newpsw.length < 6){
							// this.newpswflag = true;
							// this.$refs.uToast.show({
							// 	title: '新密码长度小于6位',
							// 	type: 'warning',
							// });
							return;
						}
						let numflag = false,strflag = false;
						for(var i=0;i<newpsw.length;i++){
							if(Boolean(Number(newpsw[i]))){
							 numflag = true;
							}else{
								strflag = true;
							}
						};	
						console.log(numflag,strflag);
						if(numflag && strflag){
							this.newpswflag = false;
						}else{
							// this.newpswflag = true;
							// this.$refs.uToast.show({
							// 	title: '新密码必须是数字+字母',
							// 	type: 'warning',
							// });
						}
					    
						if (phoneflag && this.code.length > 0 && numflag && strflag) {
							this.loginflag = false;
						} else {
							this.loginflag = true;
						}
					},
					handleSendPhone(){
						let ptext = this.phone;
						let phoneflag = this.$u.test.mobile(ptext);
						console.log(phoneflag);
						if(!phoneflag){
							this.phoneflag = true;
						}else{
							let nub = 60;
							let that = this;
							this.phoneflag = false;
							this.codetime = false;
							this.settimeobj = setInterval(function(){
		
								let str = '重新获取('+ (--nub) + 's)';
								that.codetext = str;
								if(nub == 0){
								clearInterval(that.settimeobj);
								that.codetime = true;
								that.settimeobj = null;
								}
		
							},1000);
						}
					},
					handleToLogin() {
						let newpsw = this.newpaw;
						if(newpsw.length < 6){
							this.newpswflag = true;
							this.$refs.uToast.show({
								title: '新密码长度小于6位',
								type: 'warning',
							});
							return;
						}
						let numflag = false,strflag = false;
						for(var i=0;i<newpsw.length;i++){
							if(Boolean(Number(newpsw[i]))){
							 numflag = true;
							}else{
								strflag = true;
							}
						};	
						console.log(numflag,strflag);
						if(numflag && strflag){
							this.forgetsendflag = true;
							setTimeout(function(){
								uni.navigateBack({
								    delta: 1
								});
							},2000);
						}else{
							this.newpswflag = true;
							this.$refs.uToast.show({
								title: '新密码必须是数字+字母',
								type: 'warning',
							});
						}
						// uni.switchTab({
						// 	url: '/pages/index/index'
						// });
					},
					backpage(){
						uni.navigateBack({
						    delta: 1
						});
					},
					handleToLoginfalse() {
						let ptext = this.phone,codetext = this.code;
						let phoneflag = this.$u.test.mobile(ptext);
						if (!phoneflag) {
							this.phoneflag = true;
							// this.$refs.uToast.show({
							// 	title: '',
							// 	type: 'warning',
							// })
						}
						if(codetext.length == 0){
							this.codeflag = true;
						}
						
						let newpsw = this.newpaw;
						if(newpsw.length < 6){
							this.newpswflag = true;
							// this.$refs.uToast.show({
							// 	title: '新密码长度小于6位',
							// 	type: 'warning',
							// });
							return;
						}
						let numflag = false,strflag = false;
						for(var i=0;i<newpsw.length;i++){
							if(Boolean(Number(newpsw[i]))){
							 numflag = true;
							}else{
								strflag = true;
							}
						};	
						console.log(numflag,strflag);
						if(numflag && strflag){
							
						}else{
							this.newpswflag = true;
							// this.$refs.uToast.show({
							// 	title: '新密码必须是数字+字母',
							// 	type: 'warning',
							// });
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
	.main{
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	padding-top: 176rpx;
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
	.backpage{
		width: 100vw;
		margin-top: 115rpx;
		position: relative;
	}
	.backicon{
		position: absolute;
		left: 40rpx;
		top:0;
	}
	.b_title{
		width: 100vw;
		text-align: center;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(67,67,67,1);
	}
	
		.inputbox {
			width: 630rpx;
			margin-left: 60rpx;
			margin-top: 146rpx;
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
	     .newpswinp{
			 width: 630rpx !important;
		 }
	.ib_phoneright {
		width: 215rpx;
		height: 118rpx;

		padding-top: 15rpx;
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
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(71, 205, 151, 1);
			margin-top: 120rpx;
			margin-left: 560rpx;
		}
	    .popupbox{
			position: fixed;
			top:0;
			left: 0;
			background:rgba(0,0,0,1);
			opacity:0.3;
			width: 100vw;
			height: 100vh;
			z-index: 990;
		}
		.pb_cont{
			width:440rpx;
			height:280rpx;
			background:rgba(255,255,255,1);
			opacity:0.98;
			border-radius:26rpx;
			z-index: 999;
			position: fixed;
			top:412rpx;
			left: 155rpx;
		}
		.p_c_pic{
			width: 82rpx;
			height: 82rpx;
			margin-top: 73rpx;
			margin-left: 179rpx;
		}
		.p_c_tit{
			font-size:30rpx;
			line-height: 0rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(68,68,68,1);
			margin-top: 24rpx;
			margin-left: 132rpx;
		}


		
</style>
