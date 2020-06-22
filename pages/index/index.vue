<template>
	<view class="container">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar"><view class="top_view"></view></view>
		<!-- #endif -->
		<view class="box">
			<Header></Header>
			<NavTab :nav-list="navList" @handleClickCheck="handleClickCheck"></NavTab>
		</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">12313</view>
		<view class="">7894563</view>
	</view>
</template>

<script>
import Header from './components/Header';
import NavTab from './components/NavTab';
export default {
	components: {
		Header,
		NavTab
	},
	data() {
		return {
			navList: [
				{
					title: '二手房源',
					icon: '../../static/images/navIcon/second-hand-house.png'
				},
				{
					title: '新房楼盘',
					icon: '../../static/images/navIcon/house-ranking.png'
				},
				{
					title: '好房评选',
					icon: '../../static/images/navIcon/new-floor.png'
				},
				{
					title: '线索',
					icon: '../../static/images/navIcon/clue.png'
				}
			]
		};
	},
	methods: {
		handleClickCheck(e) {
			console.log(e);
		}
	},
	onLoad() {}
};
</script>

<style lang="scss" scoped>
.container {
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.box {
		background: linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%);
	}
}
</style>
