<template>

	<view class="main">
		<view class="topheader">
			<view class="userbox">
				<view class="ub_cont">
					<image class="c_userpic" :src="userobj.pic" mode=""></image>
					<view class="u_c_right">
						<view class="c_r_namebox">
							<view class="r_n_name">
								{{userobj.name}}
							</view>
							<image class="r_n_pic" src="../../static/images/profile/yirenzheng@2x.png" mode=""></image>
						</view>
						<view class="c_r_localbox">
							{{userobj.sf + '-' + userobj.gs + '-' + userobj.gsdd}}
						</view>
						<view class="c_r_useridbox">
							<view>工号:</view>
							<view class="r_u_id">{{userobj.userid}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bannerbox">
				<image class="bb_img" src="../../static/images/profile/tiao@2x.png"></image>
				<view class="b_b_cont">
					<view class="b_c_left">优秀经纪人评选</view>
					<view class="b_c_right">亮出最棒的你</view>
				</view>
				<view class="b_b_joinbut">
					立刻参与
					<u-icon name="arrow-rightward"></u-icon>
				</view>
			</view>
		</view>
		<view class="userdatabox">
			<view class="udb_title">近7日个人数据</view>
			<view class="udb_ul">
				<view class="u_u_li">
					<view class="u_li_num">64</view>
					<view class="u_li_tit">带看</view>
				</view>
				<view class="u_u_li">
					<view class="u_li_num">64000</view>
					<view class="u_li_tit">成交</view>
				</view>
				<view class="u_u_li">
					<view class="u_li_num">64</view>
					<view class="u_li_tit">客源</view>
				</view>
				<view class="u_u_li">
					<view class="u_li_num">64%</view>
					<view class="u_li_tit">转化率</view>
				</view>
			</view>
			<view class="udb_middle"></view>
			<view class="visualbut">
				<image src="../../static/images/profile/shujukanban@2x.png"></image>
				<view class="vb_tit">数据看板</view>
			</view>
		</view>
		<view class="scroll_list_box">
			<navigator url="/pages/profile/components/historypage/index" hover-class="navigator-hover">
			<view class="l_b_li" style="margin-top: 0;">
				<image class="li_icon" src="../../static/images/profile/liulan@2x.png"></image>
				<view class="li_title">浏览记录</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			</navigator>
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/qianban@2x.png"></image>
				<view class="li_title">个人钱包</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/pingjiaguanli@2x.png"></image>
				<view class="li_title">评价管理</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/jifen@2x.png"></image>
				<view class="li_title">我的优品积分</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			<navigator url="/pages/profile/components/attentionpage/index" hover-class="navigator-hover">
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/guanzhu@2x.png"></image>
				<view class="li_title">我的关注</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			</navigator>
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/kefu.png"></image>
				<view class="li_title">我的客服</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/renzheng@2x.png"></image>
				<view class="li_title">认证中心</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/guanyubanben@2x.png"></image>
				<view class="li_title">关于版本</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>

			<navigator url="/pages/profile/components/setpage/index" hover-class="navigator-hover">
			<view class="l_b_li">
				<image class="li_icon" src="../../static/images/profile/shezhi@2x.png"></image>
				<view class="li_title">设置</view>
				<image class="li_moreicon" src="../../static/images/profile/moreicon.png"></image>
			</view>
			</navigator>
			
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userobj: {
					pic: '../../static/images/login/touxiang.jpg',
					name: "王艺霖",
					sf: '经济人',
					gs: '百度',
					gsdd: '海淀区百度大厦',
					userid: '100000111',
				}
			};
		}
	}
</script>

<style scoped>
	.main {
		width: 100vw;
		height: 100vh;
		background: rgba(245, 245, 245, 1);
		position: relative;
		box-sizing: border-box;
		overflow-y: scroll;
		padding-top: 362rpx;
		padding-bottom: 100rpx;
	}

	.topheader {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.userbox {
		width: 100vw;
		height: 278rpx;
		box-sizing: border-box;
		background: linear-gradient(-75deg, rgba(17, 183, 161, 1) 22%, rgba(65, 205, 147, 1) 100%);
		box-shadow: 0px 10px 22px 0px rgba(1, 30, 26, 0.2);
		/* 		position: fixed;
		top:0rpx;
		left: 0;
		z-index: 99; */
	}

	.ub_cont {
		position: absolute;
		top: 118rpx;
		left: 40rpx;
		display: flex;
		z-index: 99;
	}

	.u_c_right {
		margin-left: 19rpx;

	}

	.c_r_namebox {
		display: flex;
		box-sizing: border-box;
	}

	.r_n_name {
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 36rpx;
	}

	.r_n_pic {
		width: 99rpx;
		height: 33rpx;
		margin-left: 20rpx;
		margin-top: 1rpx;

	}

	.c_userpic {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
	}

	.c_r_localbox {
		max-width: 500rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		margin-top: 18rpx;
		line-height: 28rpx;
	}

	.c_r_useridbox {
		font-size: 28rpx;
		line-height: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		display: flex;
		margin-top: 17rpx;
		max-width: 500rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.r_u_id {
		margin-left: 10rpx;
	}

	.bannerbox {
		width: 100vw;
		height: 87rpx;
		position: relative;
		/* 		position: fixed;
		top:278rpx;
		left: 0; */
		/* 	margin-top: 278rpx; */
	}

	.bb_img {
		width: 100vw;
		height: 87rpx;
	}

	.b_b_cont {
		position: absolute;
		left: 70rpx;
		top: 25rpx;
		height: 26rpx;
		line-height: 0rpx;
		display: flex;
	}

	.b_c_left {
		width: auto;
		font-size: 26rpx;
		line-height: 26rpx;
		font-family: FZCuHeiSongS-B-GB;
		font-weight: 600;
		color: rgba(253, 225, 108, 1);
	}

	.b_c_right {
		width: 166rpx;
		height: 26rpx;
		font-size: 26rpx;
		line-height: 26rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(253, 225, 108, 1);
		text-align: right;
		margin-left: 10rpx;
		border-left: 1rpx solid rgba(253, 225, 108, 1);
	}

	.b_b_joinbut {
		position: absolute;
		top: 20rpx;
		right: 70rpx;
		width: 140rpx;
		height: 36rpx;
		background: rgba(253, 225, 109, 1);
		border-radius: 18rpx;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(12, 21, 53, 1);
		text-align: center;
	}

	.userdatabox {
		width: 100vw;
		height: 180rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
		margin-top: 27rpx;
		position: relative;
		box-sizing: border-box;

	}

	.udb_title {
		position: absolute;
		top: 20rpx;
		margin-left: 40rpx;
		line-height: 0;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}

	.udb_ul {
		width: 586rpx;
		display: flex;
		justify-content: space-between;
		/* 	border:1px solid #000; */
		box-sizing: border-box;
		padding-left: 51rpx;
		padding-right: 20rpx;
		position: absolute;
		bottom: 34rpx;
	}

	.u_u_li {
		/* line-height: 0rpx; */
		text-align: center;
		/* width: 120rpx; */
	}

	.u_li_num {
		font-size: 40rpx;
		line-height: 40rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: rgba(51, 51, 51, 1);
		max-width: 120rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.u_li_tit {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 26rpx;
		margin-top: 15rpx;
		color: rgba(102, 102, 102, 1);

	}

	.udb_middle {
		width: 25rpx;
		height: 140rpx;

		background: linear-gradient(-90deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, -0.04) 100%);
		opacity: 0.3;
		border-radius: 5rpx;
		position: absolute;
		left: 586rpx;
		top: 20rpx;
	}

	.visualbut {
		position: absolute;
		top: 57rpx;
		right: 27rpx;
	}

	.visualbut>image {
		width: 59rpx;
		height: 59rpx;
		margin-left: 18rpx;
	}

	.vb_tit {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(32, 189, 158, 1);
		line-height: 0rpx;
		margin-top: 15rpx;
	}

	.scroll_list_box {
		width: 100vw;
		height: 940rpx; 
		background: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
		margin-top: 20rpx;
		padding-top: 40rpx;
		box-sizing: border-box;
	/* 	overflow-y: scroll; */
	}

	.l_b_li {
		width: 100vw;
		height: 50rpx;

		margin-top: 40rpx;
		margin-bottom: 1rpx;
		display: flex;
		position: relative;
	}

	.li_icon {
		width: 50rpx;
		height: 50rpx;
		margin-left: 40rpx;
	}

	.li_title {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(68, 68, 68, 1);
		margin-left: 20rpx;
		line-height: 50rpx;
	}

	.li_moreicon {
		width: 14rpx;
		height: 24rpx;
		position: absolute;
		top: 13rpx;
		right: 40rpx;
	}
</style>
