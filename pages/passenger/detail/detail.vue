<template>
	<view class="container">
		<u-navbar :is-fixed="true" back-icon-color="#fff" back-icon-size="40" title="客源详情" title-color="#fff" title-size="36" :background="background">
			<view class="slot-right" slot="right">
				<view class="right-item"><u-icon name="question-circle" size="38" color="#fff"></u-icon></view>
				<view class="right-item">
					<u-icon name="chat" size="38" color="#fff"></u-icon>
					<u-badge :is-dot="true" size="mini" :offset="[-4, -4]"></u-badge>
				</view>
			</view>
		</u-navbar>
		<view class="main">
			<!-- 客户信息 -->
			<view class="cell_box">
				<view class="cell">
					<view class="title d-flex">
						<view class="name">{{ customer.name }}</view>
						<view class="rate d-flex ai-center" v-for="(i, index) in customer.rate" :key="index"><u-icon name="star-fill" color="#F5A623" size="22"></u-icon></view>
					</view>
				</view>
				<view class="guest_type_list d-flex mt20">
					<view class="guest_type tips_type_1">线上客户</view>
					<view class="guest_type tips_type_2">优品APP</view>
					<view class="guest_type tips_type_3">活跃客户</view>
				</view>
				<view class="customer mt20 d-flex flex-wrap">
					<view class="common_tips">
						<text class="color">客源ID：</text>
						60100000000640
					</view>
					<view class="common_tips">
						<text class="color">上次维护：</text>
						2020/01/01
					</view>
					<view class="common_tips">
						<text class="color">委托事件：</text>
						2020/01/01
					</view>
					<view class="common_tips">
						<text class="color">备用联系人：</text>
						暂无
					</view>
				</view>
			</view>
			<!-- 跟进 -->
			<view class="cell_box">
				<view class="cell d-flex ai-center jc-between">
					<view class="title">最新跟进</view>
					<u-icon name="arrow-right" color="#999" size="24"></u-icon>
				</view>
				<view class="mt20 follow">
					<view class="d-flex ai-center jc-between">
						<view class="">2020/04/17 11:10</view>
						<view class="">冯金泽</view>
					</view>
					<view class="more">具体跟进内容展示</view>
				</view>
			</view>

			<!-- 带看 -->
			<view class="cell_box">
				<view class="show">
					<view class="cell"><view class="title">带看</view></view>
					<view class="detail d-flex mt20">
						<view class="show_common d-flex flex-column jc-between">
							<view class="frequency">3</view>
							<view class="type">总代看次</view>
						</view>
						<view class="show_common  d-flex flex-column jc-between">
							<view class="frequency">12</view>
							<view class="type">上次带看</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 买二手 -->
			<view class="cell_box">
				<view class="second_hand_floor">
					<view class="cell"><view class="title">买二手住宅</view></view>
					<view class="floor_msg mt20 d-flex flex-wrap">
						<view class="common_tips">
							<text class="color">需求进度：</text>
							未带看
						</view>
						<view class="common_tips">
							<text class="color">心里价位：</text>
							180-200万
						</view>
						<view class="common_tips">
							<text class="color">面积：</text>
							180-200m&sup2;
						</view>
						<view class="common_tips">
							<text class="color">居室：</text>
							2-4居
						</view>
						<view class="common_tips">
							<text class="color">商圈：</text>
							天津
						</view>
						<view class="common_tips">
							<text class="color">付款方式：</text>
							未知
						</view>
					</view>
				</view>
			</view>
		</view>
		<Footer></Footer>
	</view>
</template>

<script>
import Footer from '../components/footer/footer.vue';
export default {
	components: {
		Footer
	},
	data() {
		return {
			customer: '',
			background: {
				backgroundImage: 'linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)'
			}
		};
	},
	onLoad(option) {
		let item = JSON.parse(decodeURIComponent(option.item));
		console.log(item);
		this.customer = item;
	}
};
</script>

<style lang="scss" scoped>
.container {
	.slot-right {
		display: flex;
		margin-right: 20rpx;
		.right-item {
			margin: 0 20rpx;
			position: relative;
			color: #ffffff;
			display: flex;
		}
	}
	.main {
		width: 100%;
		box-sizing: border-box;
		padding: 40rpx;
		.cell_box {
			margin-bottom: 60rpx;
			&:not(:first-child) {
				.cell {
					padding-bottom: 30rpx;
					position: relative;
					&::after {
						content: '';
						position: absolute;
						border-top: 1rpx solid #e1e1e1;
						// border: 1rpx solid red;
						width: 100%;
						bottom: 0;
						left: 0;
					}
				}
			}
			.cell {
				.title {
					line-height: 1;
					font-size: 34rpx;
					// color: #444;
					font-weight: 500;
					.name {
						margin-right: 40rpx;
					}
					.rate {
						margin-right: 14rpx;
					}
				}
			}
			.mt20 {
				margin-top: 20rpx;
			}
			// 标签
			.guest_type_list {
				.guest_type {
					font-size: 22rpx;
					padding: 5rpx 9rpx;
					box-sizing: border-box;
					margin-right: 10rpx;
					border-radius: 4rpx;
				}
				.tips_type_1 {
					background: #cffce9;
					color: #3bb985;
				}
				.tips_type_2 {
					background: #fff;
					border: 1rpx solid #42cd94;
					color: #42cd94;
				}
				.tips_type_3 {
					background: #fff;
					border: 1rpx solid #696969;
					color: #696969;
				}
			}
			.customer {
				font-size: 24rpx;
			}
			// 跟进
			.follow {
				font-size: 26rpx;
				color: #999;
				.more {
					font-size: 28rpx;
					margin-top: 30rpx;
					color: #444;
				}
			}
			// 带看
			.show {
				.detail {
					height: 160rpx;
					box-sizing: border-box;
					padding: 40rpx 0;
					.show_common {
						width: 50%;
						text-align: center;
						line-height: 1;
						.frequency {
							color: #444;
							font-size: 34rpx;
							font-weight: bold;
						}
						.type {
							font-size: 26rpx;
							color: #999;
						}
					}
				}
			}
			// 买二手住宅
			.second_hand_floor {
				.floor_msg {
					font-size: 28rpx;
				}
			}
			// 公共标签
			.common_tips {
				width: 50%;
				color: #444;
				margin-bottom: 20rpx;
				.color {
					color: #999;
				}
			}
		}
	}
}
</style>
