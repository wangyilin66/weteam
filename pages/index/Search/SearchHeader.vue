<template>
  <view class="search d-flex jc-between ai-center">
    <view class="search_box d-flex ai-center">
      <view class="house_type" @click="handleSelect()">
        {{ typeName }}
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
      <view
        class="type_item"
        v-for="item in typeList"
        :class="{ active: item._id === isCheck }"
        :key="item._id"
        @click="handleClickCheck(item)"
      >
        {{ item.type }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      house: "",
      typeName: "二手房",
      isSelect: false,
      typeList: [
        {
          _id: 1,
          type: "二手房",
        },
        {
          _id: 2,
          type: "新房",
        },
        {
          _id: 3,
          type: "租房",
        },
      ],
      isCheck: 1,
    };
  },
  methods: {
    handleSelect() {
      this.isSelect = !this.isSelect;
    },
    handleClickCheck(item) {
      this.isCheck = item._id;
      this.typeName = item.type;
      this.isSelect = false;
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
      width: 92rpx;
      text-align: center;
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
    position: absolute;
    border: 1px solid rgba(215, 215, 215, 1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #fff;
    z-index: 999;
    color: #000;
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 10rpx;
      border-style: solid;
      border-color: transparent transparent #fff;
      top: -20rpx;
      left: 26%;
    }
    .type_item {
      width: 100%;
      text-align: center;
      height: 90rpx;
      box-sizing: border-box;
      line-height: 90rpx;
      font-size: 32rpx;
      color: #444;
      position: relative;
      &.active {
        font-weight: bold;
        color: #47cd97;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 100rpx;
        border-bottom: 2rpx solid #d7d7d7;
      }
      &:last-child {
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          width: 100rpx;
          border: 0;
        }
      }
    }
  }
}
</style>
