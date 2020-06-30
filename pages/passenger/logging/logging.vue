<template>
	<view class="container">
		<u-navbar :is-fixed="true" back-icon-color="#fff" back-icon-size="40" title="录入客源" title-color="#fff" title-size="36" :background="background">
			<view class="slot-right" slot="right"><u-icon name="question-circle" color="#fff" size="42"></u-icon></view>
		</u-navbar>
		<view class="main">
			<u-form :model="form" ref="uForm">
				<view class="user_msg">
					<view class="title">基本信息</view>
					<view class="">
						<u-form-item label="姓名" required prop="name"><u-input v-model="form.name" /></u-form-item>
						<u-form-item label="手机" required prop="mobile"><u-input maxlength="11" v-model="form.mobile" /></u-form-item>
						<!-- <view class="">新增联系方式</view> -->
						<u-form-item label="性别" required prop="sex">
							<u-radio-group size="46" v-model="form.sex" @change="radioGroupChange" class="d-flex ai-center jc-end">
								<u-radio shape="circle" active-color="#42CD94" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">{{ item.name }}</u-radio>
							</u-radio-group>
						</u-form-item>
						<u-form-item label="委托来源" label-width="160" required prop="laiyuan">
							<u-input placeholder="请选择" v-model="form.laiyuan" type="select" :select-open="actionSheetShow" @click="actionSheetShow = true" />
						</u-form-item>
					</view>
				</view>
				<!-- 备用联系人 -->
				<view class="alternate_contact">
					<view class="title">备用联系人</view>
					<view class="">
						<u-form-item label="姓名" prop="aname"><u-input v-model="form.aname" /></u-form-item>
						<u-form-item label="手机" prop="amobile"><u-input maxlength="11" v-model="form.amobile" /></u-form-item>
						<u-form-item label="性别" prop="asex">
							<u-radio-group size="46" v-model="form.asex" @change="radioGroupChangeOne" class="d-flex ai-center jc-end">
								<u-radio shape="circle" active-color="#42CD94" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">{{ item.name }}</u-radio>
							</u-radio-group>
						</u-form-item>
					</view>
				</view>
				<!-- 其他 -->
				<view class="others">
					<view class="title">其他</view>
					<view class="">
						<u-form-item label="名下房产" label-width="160"><u-input v-model="form.budget" type="select" /></u-form-item>
						<u-form-item label="贷款情况" label-width="160"><u-input v-model="form.budget" type="select" /></u-form-item>
						<u-form-item label="所在区域" label-width="160"><u-input v-model="form.budget" type="select" /></u-form-item>
					</view>
				</view>
				<!-- 客户需求 -->
				<view class="demand">
					<view class="title d-flex jc-between">
						客户需求
						<view class=""><u-icon name="plus" color="#41CD93" size="44" @click="form.demand.push({})"></u-icon></view>
					</view>
					<view class="" v-for="(item, i) in form.demand" :key="i">
						<view class="title d-flex jc-between">客户需求 <u-icon name="close" color="#F14D53" size="44" @click="form.demand.splice(i, 1)"></u-icon></view>
						<view class="">
							<u-form-item label="首付预算" label-width="160"><u-input v-model="item.budget" /></u-form-item>
							<u-form-item label="购房区域" label-width="160"><u-input v-model="item.region" /></u-form-item>
							<u-form-item label="交房类型" label-width="160">
								<u-input v-model="item.houseTypes" :disabled="true" @click="handleInput(i)" />
								<!-- <u-input v-model="item.houseTypes" type="text" :select-open="actionSheetShowHouse" @click="actionSheetShowHouse = true" /> -->
							</u-form-item>
							<u-form-item label="居室"><u-input v-model="item.house" /></u-form-item>
							<u-form-item label="面积"><u-input v-model="item.area" /></u-form-item>
						</view>
					</view>
				</view>
				<!-- 备注 -->
				<view class="others">
					<view class="title">备注</view>
					<view class=""><u-input v-model="form.remarks" :type="type" :border="border" :height="height" :auto-height="autoHeight" /></view>
				</view>
			</u-form>
			<u-button @click="submit">确认添加</u-button>
			<!-- 委托来源 -->
			<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
			<!-- 名下房产 -->
			<!-- 贷款情况 -->
			<!-- 所在区域 -->
			<!-- 首付预算 -->
			<!-- 购房区域 -->
			<!-- 交房类型 -->
			<u-action-sheet :list="houseList" v-model="actionSheetShowHouse" @click="actionHouseCallback"></u-action-sheet>
		</view>
	</view>
</template>

<script>
import Demand from '../components/demand.vue' 
export default {
	data() {
		return {
			border: true,
			background: {
				backgroundImage: 'linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)'
			},
			form: {
				name: '', //客户姓名
				mobile: '', //手机号
				sex: '', //性别
				rate: '', //意愿星级
				laiyuan: '', //来源
				contacts: [], //联系人
				hasHouse:'',//名下房产
				loan:'',//贷款情况
				area:'',//所在区域
				demand: [] //客户需求
			},
			type: 'textarea',
			border: true, //文本框线
			height: 100, //文本框高度
			autoHeight: true, //自动高度
			list: [
				{
					name: '男',
					checked: false,
					disabled: false
				},
				{
					name: '女',
					checked: false,
					disabled: false
				}
			],
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
						trigger: ['blur']
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
						trigger: ['blur']
					}
				],
				sex: [
					{
						required: true,
						message: '请选择性别',
						trigger: ['change']
					}
				],
				rate: [
					{
						required: true,
						message: '请选择客户意愿',
						trigger: ['change']
					}
				],
				laiyuan: [
					{
						required: true,
						message: '请选择原因',
						trigger: ['change']
					}
				]
			},
			// 来源选项
			actionSheetList: [
				{
					text: '房东'
				},
				{
					text: '二房东'
				}
			],
			actionSheetShow: false, //来源选项
			// 名下房产
			houseList: [
				{
					text: '商品房'
				},
				{
					text: '回迁房'
				}
			],
			actionSheetShowHouse: false //交房类型
		};
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	wacth:{
		"form.demand":function(oldValue,newvalue){
				console.log(oldValue,'oldValue')
				console.log(newvalue,'newvalue')
			deep:true
			},
	},
	methods: {
		radioGroupChange(val) {
			console.log(val);
			console.log(this.form);
		},
		radioGroupChangeOne(val) {
			console.log(val, 'one');
			console.log(this.form, 'one');
		},
		changeRate(el) {
			console.log(el);
			this.form.rate = el;
		},
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		},
		// 房屋来源
		actionSheetCallback(index) {
			this.form.laiyuan = this.actionSheetList[index].text;
		},
		handleInput(i){
			console.log(i)
			this.actionSheetShowHouse = true
			this.houseIndex = i
		},
		// 交房类型
		actionHouseCallback(index) {
			let list = JSON.parse(JSON.stringify(this.houseList))
			let houseTypes = list[index].text
			debugger
			// console.log(this.form.demand[this.houseIndex]['houseTypes'] = houseTypes)
			this.form.demand[this.houseIndex] = Object.assign({},{houseTypes:houseTypes})
			console.log(this.form)
			// .push({houseTypes})
		}
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
	/deep/.u-form-item--right__content {
		height: 100%;
	}
	/deep/.u-form-item--right__content__slot {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
}
</style>
