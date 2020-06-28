<template>
	<view class="container">
		<u-navbar :is-fixed="true" back-icon-color="#fff" back-icon-size="40" title="录入客源" title-color="#fff" title-size="36" :background="background">
			<view class="slot-right" slot="right"><u-icon name="question-circle" color="#fff" size="42"></u-icon></view>
		</u-navbar>
		<view class="main">
			<view class="user_msg">
				<view class="title">基本信息</view>
				<view class="">
					<u-form :model="form" ref="uForm">
						<u-form-item label="姓名" required prop="name"><u-input v-model="form.name" /></u-form-item>
						<u-form-item label="手机" required prop="mobile"><u-input v-model="form.mobile" /></u-form-item>
						<u-form-item label="性别">
							<!-- 		<u-radio-group v-model="sex" @change="radioGroupChange">
								<u-radio 
				@change="radioChange" 
				v-for="(item, index) in list" :key="index" 
				:name="item.name"
				:disabled="item.disabled"
			>
				{{item.name}}
			</u-radio>
							</u-radio-group> -->
						</u-form-item>
					</u-form>
				</view>
			</view>
			<view class="user_msg"><view class="title">备用联系人信息</view></view>
			<view class="user_msg"><view class="title">其他</view></view>
			<view class="user_msg"><view class="title">客户需求</view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			background: {
				backgroundImage: 'linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)'
			},
			form: {
				name: '',
				mobile: '',
				sex: 1
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}
				],
				mobile: [
					{
						required: true,
						message: '请输入正确的手机号',
						trigger: ['blur', 'change']
					},
					{
						// 自定义验证函数，见上说明
						validator: (rule, value, callback) => {
							// 上面有说，返回true表示校验通过，返回false表示不通过
							// this.$u.test.mobile()就是返回true或者false的
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change
						trigger: ['change', 'blur']
					}
				]
			}
		};
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};
</script>

<style lang="scss" scoped>
.container {
	.slot-right {
		margin-right: 40rpx;
	}
	.main {
		width: 100%;
		box-sizing: border-box;
		padding: 0 40rpx;
		.title {
			width: 100%;
			font-size: 34rpx;
			font-weight: 500;
			color: #444;
			padding: 40rpx 0;
		}
		// 用户基本信息
		.user_msg {
		}
	}
}
</style>
