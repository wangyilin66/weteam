<template>
	<view class="container">
		<u-navbar :is-fixed="true" back-icon-color="#fff" back-icon-size="40" title="客源线索" title-color="#fff" title-size="36" :background="background"></u-navbar>
		<view class="main">
			<view class="nav_box">
				<view class="nav_list d-flex jc-between" @click="">
					<view class="nav_item" :class="{ active: item._id === isActive }" v-for="item in navList" @click="handleClickCheck(item._id)">
						<view class="nav_icon">
							<view class="icon_box">
								<u-icon :name="item.icon" size="50"></u-icon>
								<u-badge v-show="item.isDot" :is-dot="true" size="mini" :offset="[-4, -4]"></u-badge>
							</view>
						</view>
						<view class="nav_name">{{ item.name }}</view>
					</view>
				</view>
			</view>
			<view class="main_box">
				<view class="title">我的待办(3)</view>
				<view class="list">
					<view class="item" v-for="item in 4">
						<view class="d-flex ai-center jc-between">
							<view class="d-flex">
								<view class="phone_number">185*****</view>
								<view class=" d-flex">
									<view class="tips tips_01">二手房</view>
									<view class="tips tips_04">拍单</view>
								</view>
							</view>
							<view class="item_status">待转录</view>
						</view>
						<view class="mt40 d-flex jc-between ai-end">
							<view class="">
								<view class="common_row mb20"><text class="color">需求：</text>求购丨4室丨120平丨南北丨100-120万</view>
								<view class="common_row mb20"><text class="color">区域：</text>武清丨下朱庄丨时光墅（武清）</view>
								<view class="common_row mb20"><text class="color">线索来源：</text>留资客户丨房源降价提醒</view>
							</view>
							<view class="icon_box"><u-icon name="phone" color="#3BB985" size="55"></u-icon></view>
						</view>
						<view class="common_row"><text class="color">最近联系时间：</text>05-15 10:02 <text class="time_color">0时0分</text>后收回</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			background: {
				backgroundImage: 'linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)'
			},
			isActive: 1,
			navList: [
				{
					name: '平台分发',
					_id: 1,
					icon: 'calendar',
					isDot: true
				},
				{
					name: '400电话',
					_id: 2,
					icon: 'phone',
					isDot: false
				},
				{
					name: 'IM显示',
					_id: 3,
					icon: 'chat',
					isDot: false
				},
				{
					name: '共享池',
					_id: 4,
					icon: 'chrome-circle-fill',
					isDot: false
				}
			]
		};
	},
	methods: {
		handleClickCheck(index) {
			this.isActive = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.main {
	width: 100%;
	.nav_box {
		width: 100%;
		height: 217rpx;
		position: relative;
		overflow: hidden;
		&::after {
			content: '';
			width: 130%;
			height: 217rpx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 0;
			z-index: -1;
			border-radius: 0 0 100% 100%;
			background: linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%);
			box-shadow: 0px 8px 10px 0px rgba(3, 47, 41, 0.1);
		}
		.nav_list {
			width: 100%;
			height: 100%;
			padding: 40rpx;
			box-sizing: border-box;
			z-index: 2;
			.nav_item {
				color: #fff;
				font-size: 24rpx;
				text-align: center;
				width: 120rpx;
				.icon_box {
					margin: 0 auto;
					position: relative;
					width: fit-content;
				}
				.nav_name {
					margin-top: 20rpx;
					letter-spacing: 2rpx;
				}
				&.active {
					font-size: 28rpx;
					font-weight: bold;
					position: relative;
					&::after {
						content: '';
						position: absolute;
						bottom: 4rpx;
						left: 50%;
						transform: translateX(-50%);
						width: 10px;
						height: 6px;
						border: 2px solid #fff;
						border-radius: 0 0 50% 50%/0 0 100% 100%;
						border-top: none;
					}
				}
			}
		}
	}
	.main_box {
		width: 100%;
		box-sizing: border-box;
		padding: 60rpx 40rpx;
		.title {
			font-size: 38rpx;
			line-height: 1;
			color: #444;
			font-weight: bold;
		}
		.list {
			width: 100%;
			.item {
				line-height: 1;
				width: 100%;
				height: 320rpx;
				box-sizing: border-box;
				border-bottom: 1rpx solid #e1e1e1;
				padding: 40rpx 0;
				font-size: 28rpx;
				.phone_number {
					font-size: 32rpx;
					color: #444;
					font-weight: bold;
					margin-right: 20rpx;
				}
				.tips {
					font-size: 22rpx;
					padding: 5rpx 8rpx;
					border-radius: 4rpx;
					margin-right: 10rpx;
				}
				.tips_02 {
					color: #3a82f0;
					background: #d7efff;
				}
				.tips_01 {
					color: #3bb985;
					background: #cffce9;
				}
				.tips_03 {
					color: #a86535;
					background: #ffddc4;
				}
				.tips_04 {
					color: #696969;
					background: #eeeff3;
				}
				.item_status {
					color: #888;
					font-size: 32rpx;
				}
				.common_row {
					font-size: 26rpx;
					color: #444;
					.color {
						color: #999;
					}
					.time_color{
						margin-left: 40rpx;
						color:#FCBA3F
					}
				}
				.icon_box{
					margin-bottom: 34rpx;
				}
				.mb20{
					margin-bottom: 20rpx;
				}
				.mt40{
					margin-top: 40rpx;
				}
			}
		}
	}
}
</style>
