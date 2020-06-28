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
    <view class="content">
      <!-- 搜索历史 -->
      <view class="history">
        <view class="title d-flex jc-between ai-center">
          <view class="tips">搜索历史</view>
          <view class="icon">
            删除
          </view>
        </view>
        <view class="search_list d-flex flex-wrap">
          <view class="search_item" v-for="item in historyList">
            {{ item }}
          </view>
        </view>
      </view>
      <!-- 搜索发现 -->
      <view class="history">
        <view class="title d-flex jc-between ai-center">
          <view class="tips">搜索发现</view>
          <view class="icon">
            刷新
          </view>
        </view>
        <view class="search_list d-flex flex-wrap">
          <view class="search_item" v-for="items in findList">
            {{ items }}
          </view>
        </view>
      </view>
      <!-- 搜索榜单 -->
      <view class="ranking">
        <u-tabs
          ref="tabs"
          :list="list"
          :current="current"
          @change="change"
          gutter="20"
          font-size="38"
          active-color="#444"
          inactive-color="#999"
          :show-bar="false"
        ></u-tabs>
        <view class="rangking_list">
          <view
            class="rank_item d-flex jc-between ai-center"
            v-for="item in rankList"
            :key="item._id"
          >
            <view class="d-flex ai-center">
              <view class="rank_tip" :class="{ active: item._id < 4 }">
                {{ item._id }}
              </view>
              <view class="house_msg">
                <view class="name">
                  {{ item.name }}
                </view>
                <view class="address">
                  {{ item.addr }}
                </view>
              </view>
            </view>
            <view class="price"> {{ item.price }}元/平 </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import SearchHeader from "./SearchHeader";
export default {
  components: {
    SearchHeader,
  },
  computed: {
    findList() {
      let list = JSON.parse(JSON.stringify(this.historyList));
      // return list
      return list.reverse();
    },
  },
  data() {
    return {
      historyList: ["凯利天香水畔", "测试", "香槟城", "杨村", "五一阳光"],
      background: {
        backgroundImage:
          "linear-gradient(-75deg, rgba(18, 183, 162, 1) 0%, rgba(50, 197, 153, 1) 100%)",
      },
      list: [
        {
          name: "热搜榜",
        },
        {
          name: "人气榜",
        },
        {
          name: "成交榜",
        },
      ],
      current: 0,
      // 榜单
      rankList: [
        {
          _id: 1,
          name: "枫丹天城",
          addr: "武清·体育中心",
          price: "26387",
        },
        {
          _id: 2,
          name: "枫丹天城",
          addr: "武清·体育中心",
          price: "26387",
        },
        {
          _id: 3,
          name: "枫丹天城",
          addr: "武清·体育中心",
          price: "26387",
        },
        {
          _id: 4,
          name: "枫丹天城",
          addr: "武清·体育中心",
          price: "26387",
        },
        {
          _id: 5,
          name: "枫丹天城",
          addr: "武清·体育中心",
          price: "26387",
        },
      ],
    };
  },
  methods: {
    change(index) {
      console.log(index);
      this.current = index;
    },
  },
};
</script>

<style lang="scss">
.container {
  background: #fff;
  .slot-wrap {
    display: flex;
    align-items: center;
    /* 如果您想让slot内容占满整个导航栏的宽度 */
    flex: 1;
    /* 如果您想让slot内容与导航栏左右有空隙 */
    padding: 0 40rpx;
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 40rpx;
    .history {
      width: 100%;
      box-sizing: border-box;
      padding: 40rpx 0;
      .title {
        .tips {
          color: #444;
          font-size: 38rpx;
          font-weight: bold;
        }
        .icon {
          font-size: 24rpx;
        }
      }
      .search_list {
        width: 100%;
        margin-left: -10rpx;
        .search_item {
          font-size: 24rpx;
          padding: 18rpx 30rpx;
          border-radius: 8rpx;
          background: #eee;
          color: #444;
          letter-spacing: 2rpx;
          margin: 10rpx;
        }
      }
    }
    // 热销榜单
    .ranking {
      width: 100%;
      .rangking_list {
        width: 100%;
        box-sizing: border-box;
        padding: 30rpx 0;
        .rank_item {
          margin-bottom: 60rpx;
          .rank_tip {
            font-size: 42rpx;
            font-weight: bold;
            color: #444;
            margin-right: 34rpx;
          }
            .active {
              color: #f53e0c !important;
            }
          .house_msg {
            .name {
              font-size: 28rpx;
              color: #444;
            }
            .address {
              font-size: 24rpx;
              color: #999;
            }
          }
          .price {
            color: #444;
            font-size: 28rpx;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
