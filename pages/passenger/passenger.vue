<template>
	<view class="container">
		<u-navbar :is-back="false" :is-fixed="true" title="" title-color="#fff" :background="background" height="50">
			<view class="slot-wrap">
				<view class="" @click="handleClickClue()"><u-icon name="search" color="#fff" size="34"></u-icon></view>
				<TabNav :tab-width="420" :list="tabList" :current="current" @handleChange="handleChange"></TabNav>
				<view class="" @click="handleClickAdd()"><u-icon name="plus" color="#fff" size="34"></u-icon></view>
			</view>
		</u-navbar>
		<view class="main">
			<view class="" v-show="this.current === 0">
				<Screen @handleCheck="handleCheck"></Screen>
				<view class="">
					<view class="" v-for="(item, index) in guestlist" :key="index"><Guest :item="item" @handleClick="todetail"></Guest></view>
				</view>
			</view>
			<view class="" v-show="this.current === 1">
				<topPopup :popup-tab="popList" :popup-btn="popBtn">
					<view class="" style="background: #fff;">
						123
					</view>
				</topPopup>
			</view>
			<view class="" v-show="this.current === 2">
				<view class="shared_pool">
					<view class="share_item d-flex jc-between ai-center" v-for="(item,i) in shareList" :key="i" @click="handleShareClick(item._id)">
						<view class="">{{item.name}}</view>
						<view class=""><u-icon name="arrow-right" size="24" color="#999"></u-icon></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import TabNav from './components/tab-common/tab-common.vue';
import Screen from './components/screen';
import Guest from './components/Guest';
import topPopup from './components/top-popup.vue'
export default {
	components: {
		TabNav,
		topPopup,
		Screen,
		Guest
	},
	data() {
		return {
			background: {
				backgroundImage: 'linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)'
			},
			current: 0,
			tabList: [
				{
					name: '二手'
				},
				{
					name: '新房'
				},
				{
					name: '商机'
				}
			],
			guestlist: [
				{
					name: '张三1',
					rate: 3
				},
				{
					name: '张三2',
					rate: 3
				},
				{
					name: '张三3',
					rate: 5
				},
				{
					name: '张三4',
					rate: 1
				}
			],
			isShow: false, //下拉显示隐藏
			popList:['状态','意向','排序','更多'],
			popBtn:[
				{
					text:'重置'
				}
			],
			shareList:[
				{
					_id:1,
					name:'新房客户共享池'
				},
				{
					_id:2,
					name:'新房资源翻打'
				}
			]
		};
	},
	onLaod() {},
	methods: {
		handleChange(index) {
			this.current = index;
		},
		todetail(item) {
			console.log(item.name);
			uni.navigateTo({
				url: `/pages/passenger/detail/detail?item=${encodeURIComponent(JSON.stringify(item))}`
			});
		},
		// 客源线索
		handleClickClue() {
			uni.navigateTo({
				url: '/pages/passenger/guest-clue/guest-clue'
			});
		},
		// 录入客源
		handleClickAdd() {
			uni.navigateTo({
				url: '/pages/passenger/logging/logging'
			});
		},
		// 下拉切换
		handleCheck(val) {
			console.log(val);
			this.isShow = true;
		},
		// 商机下切换
		handleShareClick(id){
			console.log(id)
		}
	}
};
</script>

<style lang="scss" scoped>
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.container {
	height: 100%;
	background: #f5f5f5;
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 40rpx;
		justify-content: space-between;
	}
	.main {
		position: relative;
		// 共享池
		.shared_pool {
			width: 100%;
			.share_item{
				width: 100%;
				height:100rpx;
				box-sizing: border-box;
				padding: 0 40rpx;
				border-bottom: 1px solid #e1e1e1;
				font-size: 34rpx;
				color: #444;
				font-weight: 500;
				background: #fff;
			}
		}
	}
}
</style>
