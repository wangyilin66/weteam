<template>
  <view class="title d-flex ai-center jc-between">
    <view class="tips">
      {{ title }}
    </view>
    <view class="more">
      <view class="" v-if="isMsg"> <text class="number">28</text>条未读 > </view>
      <view class="" v-if="isMore">查看更多 ></view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
		isMsg:{
			type:Boolean,
			default:false
		},
		isMore:{
			type:Boolean,
			default:false
		},
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 58rpx;
  background-color: #fff;
  box-sizing: border-box;
  // padding: 0 40rpx;
  .tips {
    font-weight: bold;
    color: #444;
    font-size: 38rpx;
    letter-spacing: 2rpx;
  }
  .more {
    font-size: 28rpx;
    font-weight: 500;
    color: #999;
    .number {
      color: #f83c0a;
    }
  }
}
</style>
