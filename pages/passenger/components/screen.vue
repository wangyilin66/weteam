<template>
  <view class="screen d-flex jc-between ai-center">
    <view class="screen_type_list d-flex ai-center jc-between">
      <view class="screen_item d-flex ai-center" v-for="item in screeenList" :key="item._id">
        <text class="name">{{item.name}}</text><u-icon name="arrow-down-fill" size="12"></u-icon>
      </view>
    </view>
    <view class="list_icon">
      <u-icon name="list" color="#888" size="36"></u-icon>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      screeenList:[
        {
          _id:1,
          name:'客户需求',
        },
         {
          _id:2,
          name:'星级',
        },
         {
          _id:3,
          name:'成交状态',
        },
         {
          _id:4,
          name:'更多筛选',
        },
      ]
    };
  },
};
</script>
<style lang="scss" scoped>
.screen {
  width: 100%;
  height: 88rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #e1e1e1;
  padding: 0 40rpx;
  .screen_type_list {
    flex: 1;
    font-size: 28rpx;
    color: #888;
    .screen_item {
      .name{
        margin-right: 10rpx;
      }
    }
  }
  .list_icon{
    width: 36rpx;
    margin-left: 40rpx;
    flex-shrink:0;
  }
}
</style>
