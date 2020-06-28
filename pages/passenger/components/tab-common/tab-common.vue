<template>
  <view class="d-flex ai-center jc-center" :style="{ width: tabWidth + 'rpx' }">
    <u-tabs
      ref="tabs"
      :list="list"
      :current="current"
      @change="change"
      gutter="20"
      font-size="34"
      active-color="#fff"
      inactive-color="#8DDBD1"
      bg-color="transparent"
    ></u-tabs>
  </view>
</template>

<script>
export default {
  props: {
    tabWidth: {
      type: Number,
      default: 400,
    },
    current: {
      type: Number,
      default: 0,
    },
		list:{
			type:Array,
			default:()=>[]
		}
  },
  data() {
    return {
      
    };
  },
  methods: {
    change(index) {
      this.$emit("handleChange", index);
    },
  },
};
</script>

<style lang="scss" scoped>
	.tab_box{
		display: flex;
		
	}
</style>
