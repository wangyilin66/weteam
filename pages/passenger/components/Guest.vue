<template>
  <view class="guest d-flex jc-between ai-center" @click="handleClick(item)">
    <view class="left d-flex flex-column jc-between">
      <view class="name_msg d-flex ai-center">
        <view class="name">
          {{ item.name }}
        </view>
        <view
          class="rate d-flex ai-center"
          v-for="(i, index) in item.rate"
          :key="index"
        >
          <u-icon name="star-fill" color="#F5A623" size="22"></u-icon>
        </view>
      </view>
      <view class="guest_type_list d-flex">
        <view class="guest_type tips_type_1">
          线上客户
        </view>
        <view class="guest_type tips_type_2">
          优品APP
        </view>
        <view class="guest_type tips_type_3">
          活跃客户
        </view>
      </view>
      <view class="floor_detail">
        155-160万丨98-120平丨1-3居
      </view>
      <view class="tips_common">
        <text class="tips_color">进度：</text>2看
      </view>
      <view class="tips_common">
        <text class="tips_color">上次维护时间：</text>2020-05-21
      </view>
    </view>
    <view class="right d-flex flex-column jc-between">
      <view class="btn">
        写跟进
      </view>
      <view class="d-flex jc-between">
        <u-icon name="phone-fill" color="#12B7A2" size="44"></u-icon>
        <u-icon name="email-fill" color="#12B7A2" size="44"></u-icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
	methods:{
		handleClick(item){
			this.$emit('handleClick',item)
		}
	}
};
</script>

<style lang="scss" scoped>
.guest {
  width: 100%;
  height: 366rpx;
  background: #fff;
  box-sizing: border-box;
  padding: 58rpx 40rpx;
  font-size: 28rpx;
  .left {
    height: 100%;
    .name_msg {
      color: #444;
      font-size: 36rpx;
      font-weight: bold;
      .name {
        margin-right: 24rpx;
      }
      .rate {
        margin-right: 14rpx;
      }
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
		// 房子信息
		.floor_detail{
			color: #444;
			font-weight: 500;
		}
		.tips_common{
			.tips_color{
				color: #999;
			}
		}
  }
  .right {
    height: 100%;
    .btn {
      width: 140rpx;
      height: 60rpx;
      box-sizing: border-box;
      border: 1rpx solid #12b7a2;
      border-radius: 30rpx;
      font-size: 28rpx;
      font-weight: bold;
      text-align: center;
      line-height: 60rpx;
      color: #12b7a2;
    }
  }
}
</style>
