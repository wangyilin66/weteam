<template>
  <view class="search d-flex jc-between ai-center">
    <view class="search_box d-flex ai-center">
      <view class="house_type" @click="handleSelect()">
        二手房
      </view>
      <view class="division">
        丨
      </view>
      <view class="input_box">
        <u-input
          class="input"
          type="text"
          v-model="house"
          placeholder="请输入楼盘/房源编号"
          placeholderStyle="color:#fff;font-size:28rpx"
          height="50"
        />
      </view>
    </view>
    <view class="cancle_box">
      取消
    </view>
    <view class="select_type" v-show="isSelect">
      <view class="">
        二手房
      </view>
      <view class="">
        新房
      </view>
      <view class="">
        租房
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      house: "",
      isSelect: false,
    };
  },
  methods: {
    handleSelect() {
      this.isSelect = !this.isSelect;
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  color: #fff;
  position: relative;
  .search_box {
    height: 70rpx;
    width: 530rpx;
    background: #17a795;
    border-radius: 20rpx;
    box-shadow: 0px 6px 6px 0px rgba(7, 90, 78, 0.06);
    box-sizing: border-box;
    padding: 0 24rpx;
    .house_type {
      font-size: 30rpx;
    }
    .division {
      font-size: 28rpx;
    }
    .input_box {
      flex: 1;
      /deep/.uni-input-input {
        color: #fff;
        font-size: 28rpx;
        width: 100%;
      }
    }
  }
  .cancle_box {
    font-size: 34rpx;
    font-weight: bold;
  }
  .select_type {
    top: 88rpx;
    width: 202rpx;
    height: 290rpx;
    position: absolute;
    border: 1px solid rgba(215, 215, 215, 1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #fff;
    z-index: 999;
    color: #000;
  }
}
</style>
