<template>
  <view class="container">
    <u-navbar
      :is-back="false"
      :is-fixed="true"
      title=""
      title-color="#fff"
      :background="background"
    >
      <view class="slot-wrap">
        <SearchHeader></SearchHeader>
      </view>
    </u-navbar>
  </view>
</template>

<script>
import SearchHeader from "./SearchHeader";
export default {
  components: {
    SearchHeader,
  },
  data() {
    return {
      background: {
        backgroundImage:
          "linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)",
      },
    };
  },
};
</script>

<style lang="scss">
.container {
  .slot-wrap {
    display: flex;
    align-items: center;
    /* 如果您想让slot内容占满整个导航栏的宽度 */
    flex: 1;
    /* 如果您想让slot内容与导航栏左右有空隙 */
    padding: 0 40rpx;
  }
}
</style>
