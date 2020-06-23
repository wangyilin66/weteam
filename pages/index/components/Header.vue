<template>
	<header class="d-flex ai-center jc-between">
			<input type="text" value="" placeholder="请输入楼盘/房源编号" disabled="true" placeholder-style="color:#fff" @click="handleClickTo()" />
			<image src="../../../static/images/service.png" mode=""></image>
			<image src="../../../static/images/code.png" mode=""></image>
		</header>
</template>

<script>
export default {
	data() {
		return {
			background:{
				backgroundImage: 'linear-gradient(-60deg,rgba(71,205,151,1) 0%,rgba(18,183,162,1) 100%);',
			}
		};
	},
	methods:{
		handleClickTo(){
			this.$emit('search')
		}
	}
};
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	box-sizing: border-box;
	input {
		width: 470rpx;
		height: 70rpx;
		background: #17a795;
		border-radius: 20rpx;
		box-shadow: 0px 6px 6px 0px rgba(7, 90, 78, 0.06);
		box-sizing: border-box;
		padding-left: 84rpx;
	}
	image {
		width: 44rpx;
		height: 44rpx;
	}
}
</style>
