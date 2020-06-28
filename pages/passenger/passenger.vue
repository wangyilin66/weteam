<template>
  <view class="container">
    <u-navbar
      :is-back="false"
      :is-fixed="true"
      title=""
      title-color="#fff"
      :background="background"
      height="50"
    >
      <view class="slot-wrap">
        <view class="" @click="handleClickClue()">
          <u-icon name="search" color="#fff" size="34"></u-icon>
        </view>
        <TabNav :tab-width="420" :list="tabList" :current="current" @handleChange="handleChange"></TabNav>
				<view class="" @click="handleClickAdd()">
					<u-icon name="plus" color="#fff" size="34"></u-icon>
				</view>
      </view>
    </u-navbar>
		<view class="content">
			<Screen></Screen>
			<view class="" v-for="(item,index) in guestlist" :key="index"> 
				<Guest :item="item" @handleClick="todetail"></Guest>
			</view>
		</view>
  </view>
</template>

<script>
import TabNav from "./components/tab-common/tab-common.vue";
import Screen from "./components/screen"
import Guest from "./components/Guest"
export default {
  components: {
		TabNav,
		Screen,
		Guest
  },
  data() {
    return {
			background:{
				backgroundImage:
				  "linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)"
			},
			current:0,
			tabList: [
			  {
			    name: "二手",
			  },
			  {
			    name: "新房",
			  },
			  {
			    name: "商机",
			  },
			  
			],
			guestlist:[
				{
					name:'张三1',
					rate:3
				},
				{
					name:'张三2',
					rate:3
				},
				{
					name:'张三3',
					rate:5
				},
				{
					name:'张三4',
					rate:1
				},
			]
		};
	},
	onLaod(){

	},
	methods:{
		handleChange(index){
			this.current = index
		},
		todetail(item){
			console.log(item.name);
			uni.navigateTo({
				url:`/pages/passenger/detail/detail?item=${encodeURIComponent(JSON.stringify(item))}`
			})
		},
		// 客源线索
		handleClickClue(){
			uni.navigateTo({
				url:"/pages/passenger/guest-clue/guest-clue"
			})
		},
		// 录入客源
		handleClickAdd(){
			uni.navigateTo({
				url:"/pages/passenger/logging/logging"
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.container{
	.slot-wrap {
    display: flex;
    align-items: center;
    /* 如果您想让slot内容占满整个导航栏的宽度 */
    flex: 1;
    /* 如果您想让slot内容与导航栏左右有空隙 */
    padding: 0 40rpx;
		justify-content: space-between;
  }
}
</style>
