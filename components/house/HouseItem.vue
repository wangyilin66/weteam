<template>
  <view class="house_item d-flex">
    <view class="pic_box">
      <image
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg"
      ></image>
    </view>
    <view class="house_msg flex-1 d-flex flex-column jc-between">
      <view class="d-flex jc-between ai-center">
        <view class="house_name">
          安德公寓
        </view>
        <view class="time">
          昨天
        </view>
      </view>
      <view class="floor_msg">
        2-1-1-1 | 55.23㎡ | 9/14 | 北
      </view>
      <view class="floor_type d-flex">
        <view class="floor_tips">
          优选好房
        </view>
        <view class="floor_tips">
          优选好房
        </view>
        <view class="floor_tips">
          优选好房
        </view>
      </view>
      <view class="floor_price d-flex jc-between">
        <view class="">
          <text class="all_price">123万</text>
          <text class="price">28788元/平</text>
        </view>
        <view class="cut_price" >
          近7天降价<text class="number">10</text>万
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.house_item {
  width: 100%;
  height: 220rpx;
  box-sizing: border-box;
  padding: 30rpx 40rpx;
  .pic_box {
    width: 210rpx;
    height: 160rpx;
    overflow: hidden;
    border-radius: 20rpx;
    margin-right: 24rpx;
    image {
      width: 100%;
    }
  }
  .house_msg {
    height: 100%;
    .house_name {
      font-size: 32rpx;
      color: #444;
      font-weight: bold;
      line-height: 1;
    }
    .time {
      font-size: 22rpx;
      color: #666;
      line-height: 1;
    }
    .floor_msg {
      font-size: 22rpx;
      color: #999;
      font-weight: 500;
    }
    .floor_type {
      font-size: 22rpx;
      .floor_tips {
        padding: 4rpx 8rpx;
        margin-right: 6rpx;
        background: #42cd94;
        color: #fff;
        border-radius: 6rpx;
      }
    }
    .floor_price {
      font-size: 26rpx;
      .all_price {
        color: #f53e0c;
        font-weight: 800;
        margin-right: 12rpx;
      }
      .price {
        color: #999;
        font-size: 22rpx;
      }
      .cut_price {
        font-size: 22rpx;
        color: #666;
        .number {
          color: #13b7a2;
        }
      }
    }
  }
}
</style>
